import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditIngresosPageRoutingModule } from './edit-ingresos-routing.module';

import { EditIngresosPage } from './edit-ingresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditIngresosPageRoutingModule
  ],
  declarations: [EditIngresosPage]
})
export class EditIngresosPageModule {}
