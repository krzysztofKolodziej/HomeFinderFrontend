import { Routes } from '@angular/router';
import { OffersComponent } from './moduls/offers/offers.component';
import { HomeComponent } from './moduls/home/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AgentsComponent } from './moduls/agents/agents.component';
import { CreditCalculatorComponent } from './moduls/credit-calculator/credit-calculator.component';

export const routes: Routes = [
    {
      path: '', component: DefaultComponent, children: [
        { path: '', component: HomeComponent },
        { path: 'offers', component: OffersComponent },
        { path: 'agents', component: AgentsComponent },
        { path: 'creditCalculator', component: CreditCalculatorComponent }
      ]
    },
    { path: '**', redirectTo: '' }
  ];


