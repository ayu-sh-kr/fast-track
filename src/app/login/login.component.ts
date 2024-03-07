import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {LogoComponent} from "../logo/logo.component";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        RouterLink,
        LogoComponent
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
}
