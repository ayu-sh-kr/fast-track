import {Component, EventEmitter, HostListener, Output} from '@angular/core';
import {Category, ProductElement} from "../../../product/product-table/product-table.component";

@Component({
  selector: 'add-button',
  standalone: true,
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {

    @Output()
    addField = new EventEmitter<ProductElement>();

    @HostListener('click')
    handleClickEvent(){
        let product: ProductElement = {
            name: '',
            description: '',
            producerName: '',
            producerEmail: '',
            producerPhone: -1,
            weight: -1,
            category: Category.LIGHT,
            receivingDate: new Date()
        };
        this.addField.emit(product);
    }

}
