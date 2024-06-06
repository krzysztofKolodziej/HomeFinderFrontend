import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FlexModule } from '@angular/flex-layout';
import { MatFormFieldControl } from '@angular/material/form-field';


@Component({
    selector: 'app-default',
    standalone: true,
    templateUrl: './default.component.html',
    styleUrl: './default.component.scss',
    imports: [RouterOutlet, FooterComponent, HeaderComponent,FlexModule]
})
export class DefaultComponent {

}
