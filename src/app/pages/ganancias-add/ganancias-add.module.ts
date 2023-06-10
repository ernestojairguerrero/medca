import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { GananciasAddPage } from './ganancias-add.page';
import { GananciasAddPageRoutingModule } from './ganancias-add-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GananciasAddPageRoutingModule
  ],
  declarations: [GananciasAddPage]
})
export class GananciasAddPageModule {}
