import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfitsPageRoutingModule } from './profits-routing.module';

import { ProfitsPage } from './profits.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfitsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProfitsPage]
})
export class ProfitsPageModule {}
