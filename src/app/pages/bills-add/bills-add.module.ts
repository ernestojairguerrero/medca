import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillsAddPageRoutingModule } from './bills-add-routing.module';

import { BillsAddPage } from './bills-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillsAddPageRoutingModule
  ],
  declarations: [BillsAddPage]
})
export class BillsAddPageModule {}
