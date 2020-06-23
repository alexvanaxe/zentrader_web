import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechAnalyisCreateComponent } from './tech-analyis-create.component';

describe('TechAnalyisCreateComponent', () => {
  let component: TechAnalyisCreateComponent;
  let fixture: ComponentFixture<TechAnalyisCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechAnalyisCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechAnalyisCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
