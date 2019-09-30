import { TestBed } from '@angular/core/testing';

import { GetAutomobilesService } from './get-automobiles.service';

describe('GetAutomobilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAutomobilesService = TestBed.get(GetAutomobilesService);
    expect(service).toBeTruthy();
  });
});
