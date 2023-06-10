import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full'},

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  
  {
    path: 'profits',
    loadChildren: () => import('./pages/profits/profits.module').then( m => m.ProfitsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'banks',
    loadChildren: () => import('./pages/bancos/banks/banks.module').then( m => m.BanksPageModule)
  },
  {
    path: 'add-banks',
    loadChildren: () => import('./pages/bancos/add-bank/add-bank.module').then( m => m.AddBankPageModule)
  },
  {
    path: 'ingresos',
    loadChildren: () => import('./pages/ingresos/ingresos/ingresos.module').then( m => m.IngresosPageModule)
  },
  // {
  //   path: 'bills-add',
  //   loadChildren: () => import('./pages/bills-add/bills-add.module').then( m => m.BillsAddPageModule)
  // },

  { path: '**', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'edit-ingresos',
    loadChildren: () => import('./pages/ingresos/edit-ingresos/edit-ingresos.module').then( m => m.EditIngresosPageModule)
  },



];
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules,
        scrollPositionRestoration: 'enabled',
        useHash: true
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


