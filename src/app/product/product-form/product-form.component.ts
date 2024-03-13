import { Component } from '@angular/core';
import {CellComponent} from "../../utils/cell/cell.component";

@Component({
  selector: 'app-product-form',
  standalone: true,
    imports: [
        CellComponent
    ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

}
