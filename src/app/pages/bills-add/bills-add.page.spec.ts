import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillsAddPage } from './bills-add.page';

describe('BillsAddPage', () => {
  let component: BillsAddPage;
  let fixture: ComponentFixture<BillsAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BillsAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
