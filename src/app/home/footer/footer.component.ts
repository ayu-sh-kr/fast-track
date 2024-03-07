import { Component } from '@angular/core';
import {LogoComponent} from "../../logo/logo.component";

@Component({
  selector: 'home-footer',
  standalone: true,
    imports: [
        LogoComponent
    ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
