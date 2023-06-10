import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, NavController } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
// import { OverlayEventDetail } from '@ionic/core/components';
import { MedcaService } from 'src/app/services/medca.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  menu = [
    { title: 'Ingresos', icon: '../../../assets/home/earnings.svg', url: '/ganancias' },
    { title: 'Egresos', icon: '../../../assets/home/reports.svg', url: '' },
    { title: 'Informe', icon: '../../../assets/home/reports.svg', url: '' },
    { title: 'Graficos', icon: '../../../assets/home/graphics.svg', url: '' },
    { title: 'Usuarios', icon: '../../../assets/home/customer.svg', url: '/roles' },
    { title: 'Proveedor', icon: '../../../assets/home/supplier.svg', url: '' },
  ]

  @ViewChild(IonModal) modal: IonModal;
  userData: any;
  dataUser;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  private _MedcaService = inject(MedcaService);
  private _navCtrl = inject(NavController);
  private ruta = inject(Router);

  ngOnInit() {
    this.getUserData();
  }


  getUserData() {
    return this._MedcaService.dataUser$
      .subscribe({
        next: (data) => {
          const dataTransf = data;
          this.userData = dataTransf;
        }
      })
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  logout() {
    this._MedcaService.logout()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: () => {
          this.cancel();
          console.log('response');
        },
      });
  }

  redirectTo() {
    this._navCtrl.navigateForward('/settings');
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}

