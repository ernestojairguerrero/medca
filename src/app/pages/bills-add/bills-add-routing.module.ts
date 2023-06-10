import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillsAddPage } from './bills-add.page';

const routes: Routes = [
  {
    path: '',
    component: BillsAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillsAddPageRoutingModule {}
