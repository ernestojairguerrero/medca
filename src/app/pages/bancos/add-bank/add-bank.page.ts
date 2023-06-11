import { Component, OnInit, inject } from '@angular/core';
import { BanksService } from '../banks.service';
import { Subject, takeUntil } from 'rxjs';
import { InteractionsService } from 'src/app/helpers/interactions.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.page.html',
  styleUrls: ['./add-bank.page.scss'],
})
export class AddBankPage implements OnInit {

  selectedFile: File | null = null;
  imageName = '';
  nameImage = '';

  private _unsubscribeAll: Subject<any> = new Subject<any>();
  private interactionSvc = inject(InteractionsService);
  private _navController = inject(NavController);

  private _banksService = inject(BanksService);

  ngOnInit() {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.nameImage = event.target.files[0].name;
  }

  upload() {
    if (this.selectedFile) {
      this._banksService.uploadFile(this.selectedFile, this.imageName)
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe({
          next: () => {
            this._navController.navigateRoot('/ingresos');
            return this.interactionSvc.presentToast('Archivo subido con éxito', 1000, 'primary');
          },
          error: () => {
            return this.interactionSvc.presentToast('Error al subir el archivo:', 1000, 'danger');
          }
        });
    }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
