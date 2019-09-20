import { TestBed } from '@angular/core/testing';

import { GetCompaniesService } from './get-companies.service';

describe('GetCompaniesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCompaniesService = TestBed.get(GetCompaniesService);
    expect(service).toBeTruthy();
  });
});
