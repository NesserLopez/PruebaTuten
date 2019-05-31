import { TestBed } from '@angular/core/testing';

import { TutenService } from './tuten.service';

describe('TutenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutenService = TestBed.get(TutenService);
    expect(service).toBeTruthy();
  });
});
