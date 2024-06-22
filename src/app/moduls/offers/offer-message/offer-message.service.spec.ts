import { TestBed } from '@angular/core/testing';

import { OfferMessageService } from './offer-message.service';

describe('OfferMessageService', () => {
  let service: OfferMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
