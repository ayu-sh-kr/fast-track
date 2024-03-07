import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {HomeSectionComponent} from "./home-section/home-section.component";
import {ContactComponent} from "./contact/contact.component";
import {TrackingComponent} from "./tracking/tracking.component";
import {StepsComponent} from "./steps/steps.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        HeaderComponent,
        HomeSectionComponent,
        ContactComponent,
        TrackingComponent,
        StepsComponent,
        FooterComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
