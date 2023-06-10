import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditIngresosPage } from './edit-ingresos.page';

describe('EditIngresosPage', () => {
  let component: EditIngresosPage;
  let fixture: ComponentFixture<EditIngresosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditIngresosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
