import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<<< HEAD:src/app/pages/egresos/egresos.page.spec.ts
import { EgresosPage } from './egresos.page';

describe('EgresosPage', () => {
  let component: EgresosPage;
  let fixture: ComponentFixture<EgresosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EgresosPage);
========
import { UsuariosPage } from './usuarios.page';

describe('UsuariosPage', () => {
  let component: UsuariosPage;
  let fixture: ComponentFixture<UsuariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuariosPage);
>>>>>>>> b44a139c62cd9321b9f3ef6a12c7777798afdbb0:src/app/pages/usuarios/usuarios.page.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
