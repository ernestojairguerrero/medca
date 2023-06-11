import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosAddPage } from './usuarios-add.page';

describe('UsuariosAddPage', () => {
  let component: UsuariosAddPage;
  let fixture: ComponentFixture<UsuariosAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuariosAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
