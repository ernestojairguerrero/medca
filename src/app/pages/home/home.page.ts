import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
// import { OverlayEventDetail } from '@ionic/core/components';
import { MedcaService } from 'src/app/services/medca.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  userData: any;
  dataResp = localStorage.getItem('data');
  dataUser;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  private _MedcaService = inject(MedcaService);
  private ruta = inject(Router);

  ngOnInit() {
    this.getUserData();
    console.log(this.dataResp)
    this.dataUser = JSON.parse(this.dataResp);
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

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  
}

