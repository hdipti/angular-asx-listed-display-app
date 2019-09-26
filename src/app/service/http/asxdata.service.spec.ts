import { TestBed } from '@angular/core/testing';

import { AsxdataService } from './asxdata.service';

describe('AsxdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsxdataService = TestBed.get(AsxdataService);
    expect(service).toBeTruthy();
  });
});
