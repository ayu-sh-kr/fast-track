import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SelectOptionsComponent} from "../../../utils/element/select-options/select-options.component";
import {CustomButtonComponent} from "../../../utils/element/custom-button/custom-button.component";

@Component({
  selector: 'table-pagination',
  standalone: true,
    imports: [
        SelectOptionsComponent,
        CustomButtonComponent

    ],
  templateUrl: './table-pagination.component.html',
  styleUrl: './table-pagination.component.css'
})
export class TablePaginationComponent{

    @Input()
    pageSize:number[] = [10, 20, 50];

    @Input()
    size!:number;

    @Output()
    sizeChange = new EventEmitter<number>();

    handlePagination(event: Event) {
        let option = event.target as HTMLOptionElement
        let value = <number> <unknown> option.value
        console.log(value);
        this.sizeChange.emit(value)
    }
}
