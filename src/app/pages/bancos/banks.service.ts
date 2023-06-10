import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanksService {


  private uploadUrl = 'http://127.0.0.1:8000/api/banco-create';

  private _http = inject(HttpClient);

  
  uploadFile(file: File, name: string): Observable<any> {
    const formData = new FormData();
    formData.append('slog', file);
    formData.append('name', name);

    return this._http.post(this.uploadUrl, formData);
  }

}
