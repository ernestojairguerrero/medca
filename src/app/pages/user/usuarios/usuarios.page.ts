import { ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Observable, Subject, of, takeUntil } from 'rxjs';
import { InteractionsService } from 'src/app/helpers/interactions.service';
import { usersModel } from '../users.model';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  users: usersModel[] = [];

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _navCtrl = inject(NavController);
  private __interactionSvc = inject(InteractionsService);
  private _UsuariosService = inject(UsuariosService);

  ngOnInit() {
    this.listusers();
  }

  addUser() {
    this._navCtrl.navigateForward(['/add-usuarios']);
    this._changeDetectorRef.detectChanges();
  }

  listusers(): void {
    this._UsuariosService.listusers()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (users: any) => {
          console.log(users);
          this.users = users.data || [];
          this._changeDetectorRef.detectChanges();
        },
        error: () => this.__interactionSvc.presentToast('Se ha presentado un error', 2000, 'danger')
      });
  }

  deleteUser(id: number) {
    console.log(id);
    return this._UsuariosService.deleteUser(id)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.listusers();
          if (response.status === true) {
            this.__interactionSvc.presentToast(response.message, 1000, 'primary');
          } else {
            this.__interactionSvc.presentToast(response.message, 2000, 'danger');
          }
        },
        error: () => {
          this.__interactionSvc.presentToast('Se ha presentado un error', 2000, 'danger');
        }
      });
    // this._navCtrl.navigateForward(['/edit-usuarios', id]);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
