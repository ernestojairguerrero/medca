import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { GetServerError } from 'src/app/helpers/get-server-error';
import { environment } from 'src/environments/environment';
import { listBanksModel } from './banks.models';

@Injectable({
  providedIn: 'root'
})
export class BanksService {


  private uploadUrl = 'http://127.0.0.1:8000/api/banco-create';
  private _apiUrl = environment.apiUrl;

  private banks: BehaviorSubject<any> = new BehaviorSubject(null);
  private errorServer: BehaviorSubject<any> = new BehaviorSubject(null);

  private _http = inject(HttpClient);
  private _getServerError = inject(GetServerError);

  get banks$(): Observable<any> { return this.banks.asObservable(); }
  
  uploadFile(file: File, name: string): Observable<any> {
    const formData = new FormData();
    formData.append('slog', file);
    formData.append('name', name);

    return this._http.post(this._apiUrl + 'banco-create', formData);
  }

  listBanks(): Observable<listBanksModel[]> {
    return this._http.get(`${this._apiUrl}bancos`,)
      .pipe(
        tap((documents: any) => {
          console.log(documents);
          this.banks.next(documents);
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

}
