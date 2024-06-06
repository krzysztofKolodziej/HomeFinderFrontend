import { Injectable } from '@angular/core';
import { Offer } from './model/offer';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  getOffers(): Observable<Offer[]>{
    return this.http.get<Offer[]>("/api/offers");
  }
  getFilteredOffers(
    minPrice?: number,
    maxPrice?: number,
    minYearOfConstruction?: number,
    maxYearOfConstruction?: number,
    kindOfProperty?: string,
    city?: string,
    minNumberOfRooms?: number,
    maxNumberOfRooms?: number,
    minArea?: number,
    maxArea?: number,
    minPricePerMeter?: number,
    maxPricePerMeter?: number,
    minFloor?: number,
    maxFloor?: number,
    ownerShipForm?: string,
    finishLevel?: string,
    parkingPlace?: string,
    heating?: string,
    market?: string,
    announcerType?: string,
    buildingType?: string
  ): Observable<Offer[]> {
    let params = new HttpParams();
  
    if (minPrice != null) params = params.append('minPrice', minPrice.toString());
    if (maxPrice != null) params = params.append('maxPrice', maxPrice.toString());
    if (minYearOfConstruction != null) params = params.append('minYearOfConstruction', minYearOfConstruction.toString());
    if (maxYearOfConstruction != null) params = params.append('maxYearOfConstruction', maxYearOfConstruction.toString());
    if (kindOfProperty != null) params = params.append('kindOfProperty', kindOfProperty);
    if (city != null) params = params.append('city', city);
    if (minNumberOfRooms != null) params = params.append('minNumberOfRooms', minNumberOfRooms.toString());
    if (maxNumberOfRooms != null) params = params.append('maxNumberOfRooms', maxNumberOfRooms.toString());
    if (minArea != null) params = params.append('minArea', minArea.toString());
    if (maxArea != null) params = params.append('maxArea', maxArea.toString());
    if (minPricePerMeter != null) params = params.append('minPricePerMeter', minPricePerMeter.toString());
    if (maxPricePerMeter != null) params = params.append('maxPricePerMeter', maxPricePerMeter.toString());
    if (minFloor != null) params = params.append('minFloor', minFloor.toString());
    if (maxFloor != null) params = params.append('maxFloor', maxFloor.toString());
    if (ownerShipForm != null) params = params.append('ownerShipForm', ownerShipForm);
    if (finishLevel != null) params = params.append('finishLevel', finishLevel);
    if (parkingPlace != null) params = params.append('parkingPlace', parkingPlace);
    if (heating != null) params = params.append('heating', heating);
    if (market != null) params = params.append('market', market);
    if (announcerType != null) params = params.append('announcerType', announcerType);
    if (buildingType != null) params = params.append('buildingType', buildingType);
  
    return this.http.get<Offer[]>('api/offers', { params: params });
  }

}
