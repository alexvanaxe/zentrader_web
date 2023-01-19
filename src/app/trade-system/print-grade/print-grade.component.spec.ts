import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrintGradeComponent } from './print-grade.component';

describe('PrintGradeComponent', () => {
  let component: PrintGradeComponent;
  let fixture: ComponentFixture<PrintGradeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
