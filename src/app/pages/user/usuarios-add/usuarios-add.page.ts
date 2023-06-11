import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InteractionsService } from 'src/app/helpers/interactions.service';
import { UsuariosService } from '../usuarios.service';
import { Observable, Subject, of, takeUntil } from 'rxjs';
import { NavController } from '@ionic/angular';
import { usersModel } from '../users.model';

@Component({
  selector: 'app-usuarios-add',
  templateUrl: './usuarios-add.page.html',
  styleUrls: ['./usuarios-add.page.scss'],
})
export class UsuariosAddPage implements OnInit {
  
  roles: string[] = ['Supervisor', 'Gerente', 'Cajeros'];

  userForm: FormGroup;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  private _formBuilder = inject(FormBuilder);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _navCtrl = inject(NavController);
  private __interactionSvc = inject(InteractionsService);
  private _UsuariosService = inject(UsuariosService);

  ngOnInit() { 
    this.inituserForm();
  }

  inituserForm(): void {
    this.userForm = this._formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      role: new FormControl('', [Validators.required])
    });
  }

  validateForm(): any {
    console.warn(this.userForm.value);
    if (this.userForm.invalid) {
      this.__interactionSvc.presentToast('Todos los campos son requeridos', 2000, 'danger');
      return Object.values(this.userForm.controls)
        .forEach(control => { control.markAsTouched(); });
    } else {
      this.adduser();
    }
  }

  adduser() {

    this._UsuariosService.addUser(this.userForm.value)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (response: any) => {
          const status = response[0].status;
          console.log(response[0].status);
          if (status === true) {
            this.__interactionSvc.presentToast('Usuario agregao satisfactoriamente', 1000, 'primary');
            this._navCtrl.navigateRoot(['/usuarios']);
          } else {
            this.__interactionSvc.presentToast('Los datos ingresados son incorrectos', 1500, 'danger');
          }
        },
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  
}
