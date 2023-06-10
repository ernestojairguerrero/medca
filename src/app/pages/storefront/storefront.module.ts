import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorefrontPageRoutingModule } from './storefront-routing.module';

import { StorefrontPage } from './storefront.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorefrontPageRoutingModule,
    ComponentsModule
  ],
  declarations: [StorefrontPage]
})
export class StorefrontPageModule {}
