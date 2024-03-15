import { Component } from '@angular/core';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatInput, MatSuffix} from "@angular/material/input";

@Component({
  selector: 'app-product-download',
  standalone: true,
    imports: [
        MatDatepicker,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatInput,
        MatSuffix
    ],
  templateUrl: './product-download.component.html',
  styleUrl: './product-download.component.css'
})
export class ProductDownloadComponent {

}
