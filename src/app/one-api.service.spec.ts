import { TestBed } from '@angular/core/testing';

import { OneApiService } from './one-api.service';

describe('OneApiService', () => {
  let service: OneApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
