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

  addUser(){
    this._navCtrl.navigateForward(['/add-usuarios']);
  }

  listusers(): Observable<any> {
    this._UsuariosService.listusers()
    .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (users: usersModel[]) => {
          console.log(users);
          this.users = users;
          this._changeDetectorRef.detectChanges();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    return of(null);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
