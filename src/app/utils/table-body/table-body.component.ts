import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonDeleteComponent} from "../element/button-delete/button-delete.component";
import {ButtonUpdateComponent} from "../element/button-update/button-update.component";
import {CellComponent} from "../cell/cell.component";
import {Category, ProductElement} from "../../product/product-table/product-table.component";

@Component({
  selector: 'table-body',
  standalone: true,
    imports: [
        ButtonDeleteComponent,
        ButtonUpdateComponent,
        CellComponent
    ],
  templateUrl: './table-body.component.html',
  styleUrl: './table-body.component.css'
})
export class TableBodyComponent {

    colName: string[] = [
        'Product Name', 'Producer Name', 'Producer Email',
        'Producer Phone', 'Weight', 'Category', 'Action'
    ];

    @Input()
    products!:ProductElement[];

    @Output()
    productsChange = new EventEmitter<ProductElement[]>();

    index: number = -1;

    saveChanges($index: number, product: ProductElement) {
        if($index != -1){
            this.products[$index] = product;
            console.log(product)
            this.index = -1
        }
    }

    delete($index: number, product: ProductElement) {
        this.products = this.products.filter(item => item !== product)
        this.productsChange.emit(this.products);
    }

}
