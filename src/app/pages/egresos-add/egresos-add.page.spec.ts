import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EgresosAddPage } from './egresos-add.page';

describe('EgresosAddPage', () => {
  let component: EgresosAddPage;
  let fixture: ComponentFixture<EgresosAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EgresosAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
