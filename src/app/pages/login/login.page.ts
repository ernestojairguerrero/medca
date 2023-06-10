import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _MedcaService: MedcaService, private router: Router) {}

  ngOnInit() {
    this.validateLogin();
  }

  login() {
    const credentials = {
      email: this.email,
      password: this.password,
    };

    this._MedcaService.login(credentials).subscribe({
      next: (response: any) => {
        // const status = response.status;
        // console.log(response.data)
        // if (status === 200) {

        // } else {
        //   alert('Usuario o contraseña incorrecta');
        // }
        this.router.navigate(['/home']);

      },
    });
  }

  validateLogin(): void {
    const dataToken = this.token;
    if (!dataToken) {
      this.email = '';
      this.password = '';
    }
  }
}
