import { TestBed } from '@angular/core/testing';

import { FileioService } from './fileio.service';

describe('FileioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileioService = TestBed.get(FileioService);
    expect(service).toBeTruthy();
  });
});
