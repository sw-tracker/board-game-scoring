import { TestBed } from '@angular/core/testing';

import { ScoringCalculationService } from './scoring-calculation.service';

describe('ScoringCalculationService', () => {
  let service: ScoringCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoringCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
