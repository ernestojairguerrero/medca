import { Injectable, inject } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InteractionsService {

  loading: any;

  private _toastController = inject(ToastController);
  private _loadingController = inject(LoadingController);

  async presentToast(mensaje: string, time: number, color: string) {
    const toast = await this._toastController.create({
      message: mensaje,
      position: 'middle',
      color: color,
      duration: time
    });
    toast.present();
  }

  async presentLoading(mensaje: string) {
    this.loading = await this._loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
    });
    await this.loading.present();
  }

  async closeLoading() {
    await this.loading.dismiss();
  }
}
