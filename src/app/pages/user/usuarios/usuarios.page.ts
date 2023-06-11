import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';

import { UsuariosService } from '../usuarios.service';
import { InteractionsService } from '../../../helpers/interactions.service';

import { usersModel } from '../users.model';


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
  private _interactionSvc = inject(InteractionsService);
  private _userInteractionService = inject(InteractionsService);
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
          console.log(users.data);
          this.users = users.data || [];
          
          this._changeDetectorRef.detectChanges();
          return this.users;
        },
        error: () => this._interactionSvc.presentToast('Se ha presentado un error', 2000, 'danger')
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
            this._interactionSvc.presentToast(response.message, 1000, 'primary');
          } else {
            this._interactionSvc.presentToast(response.message, 2000, 'danger');
          }
        },
        error: () => {
          this._interactionSvc.presentToast('Se ha presentado un error', 2000, 'danger');
        }
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
