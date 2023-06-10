import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditIngresosPage } from './edit-ingresos.page';

const routes: Routes = [
  {
    path: '',
    component: EditIngresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditIngresosPageRoutingModule {}
