import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
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

  constructor(private ruta: Router, private _MedcaService: MedcaService) {}

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
    this.cancel();
    this._MedcaService.logout().subscribe({
      next: () => {
        console.log('response');
      },
    });
  }
}
