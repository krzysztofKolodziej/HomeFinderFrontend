import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { NumberFormatPipe } from '../../shared/components/number.format.pipe';
import { AgentsService } from './agents.service';
import { Agent } from './model/agent';

@Component({
  selector: 'app-agents',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    FlexModule,
    NgFor,
    RouterModule,
  ],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.scss'
})
export class AgentsComponent {

  agents: Agent[] = [];

  constructor(private agentsService: AgentsService) {
    this.getAgents();
   }

  getAgents() {
    this.agentsService.getAgents()
      .subscribe(agent => this.agents = agent);
  }

}
