import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


// import { RolesPage } from './roles.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RolesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    // RolesPage
  ]
})
export class IngresosModule {}
