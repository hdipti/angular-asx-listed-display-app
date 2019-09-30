import { TestBed } from '@angular/core/testing';

import { GetSelectedCompaniesService } from './get-selected-companies.service';

describe('GetSelectedCompaniesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSelectedCompaniesService = TestBed.get(GetSelectedCompaniesService);
    expect(service).toBeTruthy();
  });
});
