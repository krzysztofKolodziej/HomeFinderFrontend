import { Component } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OfferUpdate } from '../model/offer-update';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { OffersAddService } from './offers-add.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-offers-add',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FlexModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  templateUrl: './offers-add.component.html',
  styleUrl: './offers-add.component.scss'
})
export class OffersAddComponent {
  
  offer!: OfferUpdate;
  offerForm!: FormGroup;

  constructor(
    private offerAddService: OffersAddService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.offerForm = this.formBuilder.group({
      kindOfProperty: [''],
      price: [''],
      title: [''],
      city: [''],
      street: [''],
      numberOfRooms: [''],
      area: [''],
      pricePerMeter: [''],
      floor: [''],
      description: [''],
      rent: [''],
      ownershipForm: [''],
      parkingPlace: [''],
      finishLevel: [''],
      heating: [''],
      contactDetails: [''],
      market: [''],
      announcerType: [''],
      yearOfConstruction: [''],
      buildingType: [''],
      media: [''],
      equipment: [''],
    });
  }

  submit() {
    let offerDetailsDto = {
      rent: this.offerForm.get('rent')?.value,
      ownershipForm: this.offerForm.get('ownershipForm')?.value,
      parkingPlace: this.offerForm.get('parkingPlace')?.value,
      finishLevel: this.offerForm.get('finishLevel')?.value,
      heating: this.offerForm.get('heating')?.value,
      contactDetails: this.offerForm.get('contactDetails')?.value,
      market: this.offerForm.get('market')?.value,
      announcerType: this.offerForm.get('announcerType')?.value,
      yearOfConstruction: this.offerForm.get('yearOfConstruction')?.value,
      buildingType: this.offerForm.get('buildingType')?.value,
      media: this.offerForm.get('media')?.value,
      equipment: this.offerForm.get('equipment')?.value
    };
    this.offerAddService.saveOffer({
      kindOfProperty: this.offerForm.get('kindOfProperty')?.value,
      price: this.offerForm.get('price')?.value,
      title: this.offerForm.get('title')?.value,
      city: this.offerForm.get('city')?.value,
      street: this.offerForm.get('street')?.value,
      numberOfRooms: this.offerForm.get('numberOfRooms')?.value,
      area: this.offerForm.get('area')?.value,
      pricePerMeter: this.offerForm.get('pricePerMeter')?.value,
      floor: this.offerForm.get('floor')?.value,
      description: this.offerForm.get('description')?.value,
      offerDetailsDto: offerDetailsDto
    } as OfferUpdate).subscribe(offer => this.router.navigate(["/offers/update", offer.id])
      .then(() => this.snackBar.open("Oferta została zapisana", '', {duration: 3000})))
      }
    }