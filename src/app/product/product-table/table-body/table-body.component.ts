import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonDeleteComponent} from "../../../utils/element/button-delete/button-delete.component";
import {ButtonUpdateComponent} from "../../../utils/element/button-update/button-update.component";
import {CellComponent} from "../../../utils/cell/cell.component";
import {Category, ProductElement} from "../product-table.component";
import {EventService} from "../../../service/event.service";

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

    constructor(private eventService:EventService<string>) {
        this.eventService.getSearchEvent().subscribe(
            data => {
                this.filter = data;
            }
        )
    }

    filter!:string;

    @Input()
    products!:ProductElement[];

    @Output()
    productsChange = new EventEmitter<ProductElement[]>();

    index: number = -1;

    showProducts(){

        if(this.filter && this.filter.trim().length > 0)
            return this.products.filter(product => product.name.startsWith(this.filter))

        return this.products
    }

    saveChanges($index: number, product: ProductElement) {
        if($index != -1){
            this.products[$index] = product;
            this.index = -1
        }
    }

    delete($index: number, product: ProductElement) {
        this.products = this.products.filter(item => item !== product)
        this.productsChange.emit(this.products);
    }

}
