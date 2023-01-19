import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OverviewReportComponent } from './overview-report.component';

describe('OverviewReportComponent', () => {
  let component: OverviewReportComponent;
  let fixture: ComponentFixture<OverviewReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
