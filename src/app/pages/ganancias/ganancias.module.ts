import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GananciasPageRoutingModule } from './ganancias-routing.module';

import { GananciasPage } from './ganancias.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GananciasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GananciasPage]
})
export class GananciasPageModule {}
