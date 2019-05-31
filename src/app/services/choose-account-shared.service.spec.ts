import { TestBed } from '@angular/core/testing';

import { ChooseAccountSharedService } from './choose-account-shared.service';

describe('ChooseAccountSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChooseAccountSharedService = TestBed.get(ChooseAccountSharedService);
    expect(service).toBeTruthy();
  });
});
