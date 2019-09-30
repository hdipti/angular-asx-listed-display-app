import { TestBed } from '@angular/core/testing';

import { GetBanksService } from './get-banks.service';

describe('GetBanksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBanksService = TestBed.get(GetBanksService);
    expect(service).toBeTruthy();
  });
});
