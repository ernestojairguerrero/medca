import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EgresosAddPage } from './egresos-add.page';

const routes: Routes = [
  {
    path: '',
    component: EgresosAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EgresosAddPageRoutingModule {}
