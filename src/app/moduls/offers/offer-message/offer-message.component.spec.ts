import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferMessageComponent } from './offer-message.component';

describe('OfferMessageComponent', () => {
  let component: OfferMessageComponent;
  let fixture: ComponentFixture<OfferMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
