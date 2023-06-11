import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, takeUntil, tap } from 'rxjs';

import { environment } from '../../../environments/environment.prod';
import { GetServerError } from '../../helpers/get-server-error';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private _apiUrl = environment.apiUrl;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  private users: BehaviorSubject<any> = new BehaviorSubject(null);
  private response: BehaviorSubject<any> = new BehaviorSubject(null);
  private errorServer: BehaviorSubject<any> = new BehaviorSubject(null);

  private _http = inject(HttpClient);
  private _getServerError = inject(GetServerError);

  get listusers$(): Observable<any> { return this.users.asObservable(); }

  constructor() { this.listusers(); }

  addUser(data: any): Observable<any> {
    return this._http.post(this._apiUrl + 'user-create', data)
      .pipe(takeUntil(this._unsubscribeAll))
      .pipe(tap((response: any) => {
        this.response.next(response);
        this.listusers();
      }),
        catchError(error => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            errorMsg = this._getServerError.extractError(error);
          }
          this._getServerError.showError(errorMsg);
          this.errorServer.next(errorMsg);
          return error;
        })
      );
  }

  listusers(): Observable<any> {
    return this._http.get(`${this._apiUrl}users`,)
      .pipe(takeUntil(this._unsubscribeAll))
      .pipe(tap((users: any) => this.users.next(users)),
        catchError(error => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            errorMsg = this._getServerError.extractError(error);
          }
          this._getServerError.showError(errorMsg);
          this.errorServer.next(errorMsg);
          return error;
        })
      );
  }

  deleteUser(id: number): Observable<any> {
    return this._http.delete(this._apiUrl + 'user-destroy/' + id)
      .pipe(
        catchError(error => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            errorMsg = this._getServerError.extractError(error);
          }
          this._getServerError.showError(errorMsg);
          this.errorServer.next(errorMsg);
          return error;
        })
      );
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }


}
