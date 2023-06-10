import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfitsPage } from './profits.page';

describe('ProfitsPage', () => {
  let component: ProfitsPage;
  let fixture: ComponentFixture<ProfitsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
