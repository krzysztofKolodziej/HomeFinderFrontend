import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { OffersService } from './offers.service';
import { Offer } from './model/offer';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexModule,
    NgFor],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {


  constructor(private offersServis: OffersService){}

  offers: Offer[] = [];

  ngOnInit(): void{
    this.getOffers();
  }

  getOffers(){
    this.offers = this.offersServis.getOffers();
  }


}
