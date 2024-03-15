import {Component} from '@angular/core';
import {CellComponent} from "../../utils/cell/cell.component";
import {CustomButtonComponent} from "../../utils/element/custom-button/custom-button.component";
import {Category, ProductElement} from "../product-table/product-table.component";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-product-form',
  standalone: true,
    imports: [
        CellComponent,
        CustomButtonComponent,
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

    productName = new FormControl('');
    productWeight = new FormControl('');
    productCategory = new FormControl('');
    receivingDate = new FormControl('');
    producerName = new FormControl('');
    producerPhone = new FormControl('');
    producerEmail = new FormControl('');
    productDescription = new FormControl('');

    addProduct() {
        let product: ProductElement = {
            name: String(this.productName.value),
            weight: Number(this.productWeight.value),
            category: Category[this.productCategory.value as keyof typeof Category],
            receivingDate: this.receivingDate.value ? new Date(this.receivingDate.value) : new Date(),
            producerName: String(this.producerName.value),
            producerPhone: Number(this.producerPhone.value),
            producerEmail: String(this.producerEmail.value),
            description: String(this.productDescription.value)
        }
        console.log(product);
    }
}

