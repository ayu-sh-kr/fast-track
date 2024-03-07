import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'home-contact',
  standalone: true,
    imports: [
        ReactiveFormsModule,
        NgClass,
        FormsModule
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    phone!: string;

}
