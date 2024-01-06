import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeWbPage } from './home-wb.page';

describe('HomeWbPage', () => {
  let component: HomeWbPage;
  let fixture: ComponentFixture<HomeWbPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeWbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
