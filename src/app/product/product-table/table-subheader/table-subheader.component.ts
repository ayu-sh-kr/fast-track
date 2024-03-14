import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {AddButtonComponent} from "../../../utils/element/add-button/add-button.component";
import {FetchButtonComponent} from "../../../utils/element/fetch-button/fetch-button.component";
import {ProductElement} from "../product-table.component";
import {EventService} from "../../../service/event.service";
import {FormsModule} from "@angular/forms";
import {CustomButtonComponent} from "../../../utils/element/custom-button/custom-button.component";

@Component({
  selector: 'table-subheader',
  standalone: true,
    imports: [
        AddButtonComponent,
        FetchButtonComponent,
        FormsModule,
        CustomButtonComponent
    ],
  templateUrl: './table-subheader.component.html',
  styleUrl: './table-subheader.component.css'
})
export class TableSubheaderComponent {

    @Output()
    addField = new EventEmitter<ProductElement>();

    @ViewChild('inputElement')
    inputElement!:HTMLInputElement

    text = '';

    constructor(private eventService: EventService<string>) {
    }

    handleAddClick(product: ProductElement){
        this.addField.emit(product)
    }

    generateSearch(event: KeyboardEvent) {
        let element = event.target as HTMLInputElement;
        this.eventService.triggerSearch(element.value)
    }


    emptySearch() {
        console.log(this.inputElement)
        this.text = ''
        this.eventService.triggerSearch('');
    }


}
