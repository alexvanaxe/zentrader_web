import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaperQuickBuyComponent } from './paper-quick-buy.component';

describe('PaperQuickBuyComponent', () => {
  let component: PaperQuickBuyComponent;
  let fixture: ComponentFixture<PaperQuickBuyComponent>;

  beforeEach(waitForAsync(() => {
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
