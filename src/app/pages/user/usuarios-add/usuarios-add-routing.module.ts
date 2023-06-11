import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosAddPage } from './usuarios-add.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosAddPageRoutingModule {}
