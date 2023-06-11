import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetServerError } from 'src/app/helpers/get-server-error';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  private _apiUrl = environment.apiUrl;

  private users: BehaviorSubject<any> = new BehaviorSubject(null);
  private errorServer:  BehaviorSubject<any> = new BehaviorSubject(null);

  private _http = inject(HttpClient);
  private _getServerError = inject(GetServerError);

  get users$(): Observable<any>{
    return this.users.asObservable();
  }

  cerateUser(name: string, email: string, rol: string, password: string):Observable<any>{
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('rol', rol);
    formData.append('password', password);

    return this._http.post(this._apiUrl + 'users-create', formData);
  }


}
