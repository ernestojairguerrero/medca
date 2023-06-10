import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { MedcaService } from 'src/app/services/medca.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  user: any = localStorage.getItem('data');

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  private _MedcaService = inject(MedcaService);
  private _navCtrl = inject(NavController);

  ngOnInit() {
    this.user = JSON.parse(this.user);
    console.log(this.user);
  }

  logout() {
    this._MedcaService.logout()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: () => {
          console.log('response');
        },
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
