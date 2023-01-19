import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListAnalysisComponent } from './list-analysis.component';

describe('ListAnalysisComponent', () => {
  let component: ListAnalysisComponent;
  let fixture: ComponentFixture<ListAnalysisComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
