import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperQuickBuyComponent } from './paper-quick-buy.component';

describe('PaperQuickBuyComponent', () => {
  let component: PaperQuickBuyComponent;
  let fixture: ComponentFixture<PaperQuickBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperQuickBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperQuickBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
