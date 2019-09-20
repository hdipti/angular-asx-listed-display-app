import { TestBed } from '@angular/core/testing';

import { ReadCompaniesService } from './read-companies.service';

describe('ReadCompaniesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadCompaniesService = TestBed.get(ReadCompaniesService);
    expect(service).toBeTruthy();
  });
});
