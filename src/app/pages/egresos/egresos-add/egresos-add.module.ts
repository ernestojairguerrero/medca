import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EgresosAddPageRoutingModule } from './egresos-add-routing.module';

import { EgresosAddPage } from './egresos-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EgresosAddPageRoutingModule
  ],
  declarations: [EgresosAddPage]
})
export class EgresosAddPageModule {}
