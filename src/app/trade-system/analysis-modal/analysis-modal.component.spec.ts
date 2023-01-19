import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnalysisModalComponent } from './analysis-modal.component';

describe('AnalysisModalComponent', () => {
  let component: AnalysisModalComponent;
  let fixture: ComponentFixture<AnalysisModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
