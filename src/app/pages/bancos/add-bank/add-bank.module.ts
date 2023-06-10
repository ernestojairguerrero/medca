import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBankPageRoutingModule } from './add-bank-routing.module';

import { AddBankPage } from './add-bank.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBankPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [AddBankPage]
})
export class AddBankPageModule {}
