import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfferUpdate } from '../model/offer-update';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferDetailsService {

  constructor(private http: HttpClient) { }

  getOfferDetails(id: number): Observable<OfferUpdate>{
    return this.http.get<OfferUpdate>("/api/offers/" + id);
  }

}
