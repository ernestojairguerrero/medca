import { Component, OnInit, inject } from '@angular/core';
import { BanksService } from '../banks.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.page.html',
  styleUrls: ['./add-bank.page.scss'],
})
export class AddBankPage implements OnInit {

  selectedFile: File | null = null;
  imageName = 'mi-foto';

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  private _banksService = inject(BanksService);

  ngOnInit() {
  }

  onFileSelected(event: any) {
    console.log(event.target.files[0]);
    this.selectedFile = event.target.files[0];
  }

  upload() {
    console.log(this.selectedFile);
    if (this.selectedFile) {
      this._banksService.uploadFile(this.selectedFile, this.imageName)
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe({
          next: (response: any) => {
            console.log('Archivo subido con éxito');
          },
          error: (error: any) => {
            console.error('Error al subir el archivo:', error);
          }
        });
    }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
