import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Route, Router } from '@angular/router';

import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedcaService {
  token = localStorage.getItem('token');

  lo: any;

  private baseUrl = 'http://127.0.0.1:8000/api';

  private dataUser: BehaviorSubject<any> = new BehaviorSubject(null);

  private _Router = inject(Router);

  constructor(private _HttpClient: HttpClient) {}

  get dataUser$(): Observable<any> {
    return this.dataUser.asObservable();
  }

  login(credentials: any): Observable<any> {
    return this._HttpClient
      .post(`${this.baseUrl}/auth/login`, credentials)
      .pipe(
        tap((data: any) => {
          const dataString = JSON.stringify(data[0].data);
          localStorage.setItem('data', dataString);

          localStorage.setItem('token', data[0].token);
        })
        // catchError
      );
  }

  logout(): Observable<any> {
    window.localStorage.clear();
    // window.location.reload();
    this._Router.navigateByUrl('/login');
    return of(null);
  }
}
