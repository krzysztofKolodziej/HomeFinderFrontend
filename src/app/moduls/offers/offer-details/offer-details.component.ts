import { Component } from '@angular/core';
import { OfferUpdate } from '../model/offer-update';
import { OfferDetailsService } from './offer-details.service';
import { ActivatedRoute } from '@angular/router';
import { NumberFormatPipe } from "../../../shared/components/number.format.pipe";
import { CommonModule } from '@angular/common';
import { OffersComponent } from '../offers.component';
import { OfferMessageComponent } from "../offer-message/offer-message.component";

@Component({
    selector: 'app-offer-details',
    standalone: true,
    templateUrl: './offer-details.component.html',
    styleUrl: './offer-details.component.scss',
    imports: [
      NumberFormatPipe, 
      CommonModule, 
      OffersComponent, 
      OfferMessageComponent]
})
export class OfferDetailsComponent {

  offer!: OfferUpdate;

  constructor(
    private offerDetailsService: OfferDetailsService,
    private router: ActivatedRoute
  ) { 
    this.getOfferDetails();
  }

  getOfferDetails() {
    let id = Number(this.router.snapshot.params['id']);
    this.offerDetailsService.getOfferDetails(id)
      .subscribe(offer => this.offer = offer)
  }

  getRoomsText(numberOfRooms: number): string {
    if (numberOfRooms === 1) {
      return `${numberOfRooms} pokój`;
    } else if (numberOfRooms >= 2 && numberOfRooms <= 4) {
      return `${numberOfRooms} pokoje`;
    } else {
      return `${numberOfRooms} pokoi`;
    }
  }
}
