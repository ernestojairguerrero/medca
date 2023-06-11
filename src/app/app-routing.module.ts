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
  },
<<<<<<< HEAD
=======
  
>>>>>>> b44a139c62cd9321b9f3ef6a12c7777798afdbb0
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
<<<<<<< HEAD
  },  
=======
  },
  
>>>>>>> b44a139c62cd9321b9f3ef6a12c7777798afdbb0
  {
    path: 'egresos',
    loadChildren: () => import('./pages/egresos/egresos.module').then( m => m.EgresosPageModule)
  },
  {
    path: 'roles',
    loadChildren: () => import('./pages/roles/roles.module').then( m => m.RolesPageModule)
<<<<<<< HEAD
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/user/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
=======
  },  
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
>>>>>>> b44a139c62cd9321b9f3ef6a12c7777798afdbb0
  },
  {
    path: 'edit-ingresos',
    loadChildren: () => import('./pages/ingresos/edit-ingresos/edit-ingresos.module').then( m => m.EditIngresosPageModule)
  },
  {
    path: 'usuarios-add',
    loadChildren: () => import('./pages/user/usuarios-add/usuarios-add.module').then( m => m.UsuariosAddPageModule)
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full'},



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

