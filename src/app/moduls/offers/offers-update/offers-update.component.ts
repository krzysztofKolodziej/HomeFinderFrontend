import { Component, OnInit } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { OffersUpdateService } from './offers-update.service';
import { OfferUpdate } from '../model/offer-update';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-offers-update',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FlexModule,
    ReactiveFormsModule,
    MatSnackBarModule],
  templateUrl: './offers-update.component.html',
  styleUrl: './offers-update.component.scss'
})
export class OffersUpdateComponent {

  offer!: OfferUpdate;
  offerForm!: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private offersUpdateSerive: OffersUpdateService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.getOffer();
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

  getOffer() {
    let id = Number(this.router.snapshot.params['id']);
    this.offersUpdateSerive.getOffer(id)
      .subscribe(offer => {
        if (offer) {
          this.offerForm.patchValue({
            kindOfProperty: offer.kindOfProperty,
            price: offer.price,
            title: offer.title,
            city: offer.city,
            street: offer.street,
            numberOfRooms: offer.numberOfRooms,
            area: offer.area,
            pricePerMeter: offer.pricePerMeter,
            floor: offer.floor,
            description: offer.description,
            rent: offer.offerDetailsDto?.rent,
            ownershipForm: offer.offerDetailsDto?.ownershipForm,
            parkingPlace: offer.offerDetailsDto?.parkingPlace,
            finishLevel: offer.offerDetailsDto?.finishLevel,
            heating: offer.offerDetailsDto?.heating,
            contactDetails: offer.offerDetailsDto?.contactDetails,
            market: offer.offerDetailsDto?.market,
            announcerType: offer.offerDetailsDto?.announcerType,
            yearOfConstruction: offer.offerDetailsDto?.yearOfConstruction,
            buildingType: offer.offerDetailsDto?.buildingType,
            media: offer.offerDetailsDto?.media,
            equipment: offer.offerDetailsDto?.equipment
          });
        }
      });
  }
  submit() {
    let id = Number(this.router.snapshot.params['id']);
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
    this.offersUpdateSerive.savePost(id, {
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
    } as OfferUpdate).subscribe(offer => {
      this.offerForm.patchValue({
        kindOfProperty: offer.kindOfProperty,
        price: offer.price,
        title: offer.title,
        city: offer.city,
        street: offer.street,
        numberOfRooms: offer.numberOfRooms,
        area: offer.area,
        pricePerMeter: offer.pricePerMeter,
        floor: offer.floor,
        description: offer.description,
        rent: offer.offerDetailsDto?.rent,
        ownershipForm: offer.offerDetailsDto?.ownershipForm,
        parkingPlace: offer.offerDetailsDto?.parkingPlace,
        finishLevel: offer.offerDetailsDto?.finishLevel,
        heating: offer.offerDetailsDto?.heating,
        contactDetails: offer.offerDetailsDto?.contactDetails,
        market: offer.offerDetailsDto?.market,
        announcerType: offer.offerDetailsDto?.announcerType,
        yearOfConstruction: offer.offerDetailsDto?.yearOfConstruction,
        buildingType: offer.offerDetailsDto?.buildingType,
        media: offer.offerDetailsDto?.media,
        equipment: offer.offerDetailsDto?.equipment
      });
    this.snackBar.open("Oferta została zapisana", '', {duration: 3000});
  })
  }

}
