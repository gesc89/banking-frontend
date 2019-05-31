import { TestBed } from '@angular/core/testing';

import { MatcherService } from './matcher.service';

describe('MatcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatcherService = TestBed.get(MatcherService);
    expect(service).toBeTruthy();
  });
});
