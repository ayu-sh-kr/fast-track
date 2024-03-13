import {Component, EventEmitter, Output} from '@angular/core';
import {AddButtonComponent} from "../../../utils/element/add-button/add-button.component";
import {FetchButtonComponent} from "../../../utils/element/fetch-button/fetch-button.component";
import {ProductElement} from "../product-table.component";

@Component({
  selector: 'table-subheader',
  standalone: true,
    imports: [
        AddButtonComponent,
        FetchButtonComponent
    ],
  templateUrl: './table-subheader.component.html',
  styleUrl: './table-subheader.component.css'
})
export class TableSubheaderComponent {

    @Output()
    addField = new EventEmitter<ProductElement>();

    handleAddClick(product: ProductElement){
        this.addField.emit(product)
    }

}
