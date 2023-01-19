import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UiModesComponent } from './ui-modes.component';

describe('UiModesComponent', () => {
  let component: UiModesComponent;
  let fixture: ComponentFixture<UiModesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UiModesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
