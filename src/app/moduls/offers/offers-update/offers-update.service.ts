import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfferUpdate } from '../model/offer-update';

@Injectable({
    providedIn: 'root'
})
export class OffersUpdateService {


    constructor(private http: HttpClient) { }

    getOffer(id: number): Observable<OfferUpdate> {
        return this.http.get<OfferUpdate>("/api/offers/" + id);
    }

    savePost(id: number, valu: OfferUpdate) {
        return this.http.put<OfferUpdate>("/api/offers/" + id, valu)
    }

}