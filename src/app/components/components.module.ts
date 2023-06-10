import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular"
import { RouterLink } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderComponent } from './header/header.component';
import { ManagementComponent } from './management/management.component';



@NgModule({
  declarations: [
    TabsComponent,
    HeaderComponent,
    ManagementComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink
  ],
  exports: [
    TabsComponent,
    HeaderComponent,
    ManagementComponent
  ]
})
export class ComponentsModule { }
