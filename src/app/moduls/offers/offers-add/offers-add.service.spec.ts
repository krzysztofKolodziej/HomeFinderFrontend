import { TestBed } from '@angular/core/testing';

import { OffersAddService } from './offers-add.service';

describe('OffersAddService', () => {
  let service: OffersAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
