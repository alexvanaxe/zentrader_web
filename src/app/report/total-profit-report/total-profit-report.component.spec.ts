import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalProfitReportComponent } from './total-profit-report.component';

describe('TotalProfitReportComponent', () => {
  let component: TotalProfitReportComponent;
  let fixture: ComponentFixture<TotalProfitReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalProfitReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalProfitReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
