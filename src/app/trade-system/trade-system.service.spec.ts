import { TestBed } from '@angular/core/testing';

import { TradeSystemService } from './trade-system.service';

describe('TradeSystemService', () => {
  let service: TradeSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
