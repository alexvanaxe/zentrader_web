import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThemeChooserComponent } from './theme-chooser.component';

describe('ThemeChooserComponent', () => {
  let component: ThemeChooserComponent;
  let fixture: ComponentFixture<ThemeChooserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
