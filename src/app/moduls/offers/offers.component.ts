import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { OffersService } from './offers.service';
import { Offer } from './model/offer';
import { NumberFormatPipe } from '../../shared/components/number.format.pipe';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';



@Component({
  selector: 'app-offers',
  standalone: true,
  
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    FlexModule,
    NgFor,

    NumberFormatPipe],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {

  offers: Offer[] = [];
  minPrice!: number;
  maxPrice!: number;
  minYearOfConstruction!: number;
  maxYearOfConstruction!: number;
  kindOfProperty!: string;
  city!: string;
  minNumberOfRooms!: number;
  maxNumberOfRooms!: number;
  minArea!: number;
  maxArea!: number;
  minPricePerMeter!: number;
  maxPricePerMeter!: number;
  minFloor!: number;
  maxFloor!: number;
  ownerShipForm!: string;
  finishLevel!: string;
  parkingPlace!: string;
  heating!: string;
  market!: string;
  announcerType!: string;
  buildingType!: string;

  constructor(private offersServis: OffersService) { }
  
  ngOnInit(): void {
    this.getOffers();
    this.applyFilters();
  }

  getOffers() {
    this.offersServis.getOffers()
      .subscribe(offer => this.offers = offer);
  }

  applyFilters() {
    this.offersServis.getFilteredOffers(
      this.minPrice,
      this.maxPrice,
      this.minYearOfConstruction,
      this.maxYearOfConstruction,
      this.kindOfProperty,
      this.city,
      this.minNumberOfRooms,
      this.maxNumberOfRooms,
      this.minArea,
      this.maxArea,
      this.minPricePerMeter,
      this.maxPricePerMeter,
      this.minFloor,
      this.maxFloor,
      this.ownerShipForm,
      this.finishLevel,
      this.parkingPlace,
      this.heating,
      this.market,
      this.announcerType,
      this.buildingType
    ).subscribe(offer => this.offers = offer);
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
