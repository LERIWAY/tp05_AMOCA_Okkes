import { TestBed } from '@angular/core/testing';

import { MonserviceService } from './monservice.service';

describe('MonserviceService', () => {
  let service: MonserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
