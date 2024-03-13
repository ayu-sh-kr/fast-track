import { Component } from '@angular/core';
import {LogoComponent} from "../../utils/logo/logo.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'admin-header',
  standalone: true,
    imports: [
        LogoComponent,
        RouterLink
    ],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {

}
