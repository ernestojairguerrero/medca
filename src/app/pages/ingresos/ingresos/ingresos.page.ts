import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BanksService } from '../../bancos/banks.service';
import { Subject, takeUntil } from 'rxjs';
import { listBanksModel } from '../../bancos/banks.models';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.page.html',
  styleUrls: ['./ingresos.page.scss'],
})
export class IngresosPage implements OnInit {

  banks: listBanksModel[] = [];

  private router = inject(Router);
  private _banksService = inject(BanksService);

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  ngOnInit() {
    this.listBanks();
  }

  addBank(){
    this.router.navigate(['/add-banks']);

  }

  listBanks() {
    return this._banksService.listBanks()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (banks: listBanksModel[]) => {
          console.log(banks);
          this.banks = banks;
        }
      })
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
