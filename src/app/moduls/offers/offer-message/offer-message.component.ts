import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldControl} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { OfferMessageService } from './offer-message.service';
import { OfferMessage } from '../model/offer-message';

@Component({
  selector: 'app-offer-message',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './offer-message.component.html',
  styleUrl: './offer-message.component.scss'
})
export class OfferMessageComponent {
  messageForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private offerMessageService: OfferMessageService)
     {
    this.messageForm = this.fb.group({
      name: [''],
      email: [''],
      phoneNumber: [''],
      message: [''],
    });
  }

  onSubmit(): void {
    const offerId = this.route.snapshot.paramMap.get('id');
    if (offerId !== null) {
      const formData: OfferMessage = {
        ...this.messageForm.value,
        offerId: +offerId 
      };

    this.offerMessageService.sendMessage(formData.offerId, formData).subscribe({
      next: () => {
        this.snackBar.open('Dziękujemy za przesłaną wiadomość', 'Zamknij', { duration: 3000 });
        this.messageForm.reset();
      },
      error: () => {
        this.snackBar.open('Wystąpił błąd podczas wysyłania wiadomości', 'Zamknij', { duration: 3000 });
      }
    });
  }
}
}
