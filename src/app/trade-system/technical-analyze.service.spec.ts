import { TestBed } from '@angular/core/testing';

import { TechnicalAnalyzeService } from './technical-analyze.service';

describe('TechnicalAnalyzeService', () => {
  let service: TechnicalAnalyzeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicalAnalyzeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
