import { Injectable } from '@angular/core';
import { Offer } from './model/offer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor() { }

  getOffers(): Offer[]{
    return [ {
      name: "Oferta 1",
      price: 14,
    },
    {
      name: "Oferta 2",
      price: 14,
    },
    {
      name: "Oferta 3",
      price: 14,
    }
  ]
  }

}
