import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'homeFinder';
}
