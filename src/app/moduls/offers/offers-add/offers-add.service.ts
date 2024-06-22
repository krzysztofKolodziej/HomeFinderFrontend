import { Injectable } from '@angular/core';
import { OfferUpdate } from '../model/offer-update';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersAddService {

  constructor(private http: HttpClient) { }

  saveOffer(offer: OfferUpdate): Observable<OfferUpdate> {
    return this.http.post<OfferUpdate>("/api/add", offer)
}
}
