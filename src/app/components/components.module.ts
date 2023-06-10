import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular"
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ManagementComponent } from './management/management.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ManagementComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink
  ],
  exports: [
    HeaderComponent,
    ManagementComponent
  ]
})
export class ComponentsModule { }
