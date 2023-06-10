import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [

  // { path: '', redirectTo: 'login', pathMatch: 'full'},

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
    path: 'bills',
    loadChildren: () => import('./pages/bills/bills.module').then( m => m.BillsPageModule)
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
    path: 'storefront',
    loadChildren: () => import('./pages/storefront/storefront.module').then( m => m.StorefrontPageModule)
  },

  { path: '**', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'banks',
    loadChildren: () => import('./pages/banks/banks.module').then( m => m.BanksPageModule)
  },
  {
    path: 'bills-add',
    loadChildren: () => import('./pages/bills-add/bills-add.module').then( m => m.BillsAddPageModule)
  }


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
export class AppRoutingModule {}
