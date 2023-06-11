import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
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
  private _changeDetectorRef = inject(ChangeDetectorRef);

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  ngOnInit() {
    this.listBanks();
  }

  addBank() {
    this.router.navigate(['/add-banks']);

  }

  listBanks() {
    this._banksService.listBanks()
      .subscribe((banks: any) => {
        this.banks = banks.map((bank: any) => ({
          ...bank,
          total_amount: parseFloat(bank.total_amount)
        }));
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
