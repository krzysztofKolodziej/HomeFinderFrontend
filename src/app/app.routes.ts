import { Routes } from '@angular/router';
import { OffersComponent } from './moduls/offers/offers.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AgentsComponent } from './moduls/agents/agents.component';
import { CreditCalculatorComponent } from './moduls/credit-calculator/credit-calculator.component';
import { OffersUpdateComponent } from './moduls/offers/offers-update/offers-update.component';
import { OffersAddComponent } from './moduls/offers/offers-add/offers-add.component';
import { OfferDetailsComponent } from './moduls/offers/offer-details/offer-details.component';

export const routes: Routes = [
  {
    path: '', component: DefaultComponent, children: [
      { path: 'offers', component: OffersComponent },
      { path: 'offers/:id', component: OfferDetailsComponent },
      { path: 'offers/update', component: OffersUpdateComponent },
      { path: 'offers/update/:id', component: OffersUpdateComponent },
      { path: 'add', component: OffersAddComponent },
      { path: 'agents', component: AgentsComponent },
      { path: 'creditCalculator', component: CreditCalculatorComponent }

    ]
  },
  { path: '**', redirectTo: '' }
];


