import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

// Services
import { InteractionsService } from 'src/app/helpers/interactions.service';
import { MedcaService } from 'src/app/services/medca.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  token = localStorage.getItem('token');
  listData: any[] = [];

  email: string;
  password: string;

  loginForm: FormGroup;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  private interactionSvc = inject(InteractionsService);
  private router = inject(Router);
  private _MedcaService = inject(MedcaService);


  ngOnInit() {
    this.initLoginForm();
  }
  
  initLoginForm() {
    console.log('initLoginForm');
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  validateForm(): any {
    if (this.loginForm.invalid) {
      this.interactionSvc.presentToast('Todos los campos son requeridos', 2000, 'danger');
      return Object.values(this.loginForm.controls)
        .forEach(control => { control.markAsTouched(); });
    } else {
      this.login();
    }
  }

  login() {
    const credentials = this.loginForm.value;

    this._MedcaService.login(credentials)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (response: any) => {
          const status = response[0].status;
          console.log(response[0].status);
          if (status === true) {
            this.interactionSvc.presentToast('Bienvenido al sistema', 2000, 'primary');
            this.router.navigate(['/home']);
          } else {
            this.interactionSvc.presentToast('Los datos ingresados son incorrectos', 2000, 'danger');
            window.localStorage.clear();
          }
        },
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
