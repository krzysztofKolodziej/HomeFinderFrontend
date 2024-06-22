import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfferMessage } from '../model/offer-message';

@Injectable({
  providedIn: 'root'
})
export class OfferMessageService {

  constructor(private http: HttpClient) { }

  sendMessage(id: number, messageData: OfferMessage): Observable<OfferMessage> {
    return this.http.post<OfferMessage>(`/api/offers/${id}/message`, messageData);
  }
}
