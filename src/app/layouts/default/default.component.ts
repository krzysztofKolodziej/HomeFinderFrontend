import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FlexLayoutServerModule } from '@angular/flex-layout/server';



@Component({
    selector: 'app-default',
    standalone: true,
    templateUrl: './default.component.html',
    styleUrl: './default.component.scss',
    imports: [RouterOutlet,RouterLink, FlexLayoutServerModule, FooterComponent, HeaderComponent]
})
export class DefaultComponent {

}
