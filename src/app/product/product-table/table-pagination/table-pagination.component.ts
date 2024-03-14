import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SelectOptionsComponent} from "../../../utils/element/select-options/select-options.component";
import {CustomButtonComponent} from "../../../utils/element/custom-button/custom-button.component";
import {count} from "rxjs";

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
    count!:number;

    @Input()
    pageSize:number[] = [10, 20, 50];

    @Input()
    size:number = 10;

    @Output()
    sizeChange = new EventEmitter<number>();

    @Input()
    start:number = 0;

    @Output()
    startChange = new EventEmitter<number>()

    page: number = 0;

    handlePagination(event: Event) {
        let option = event.target as HTMLOptionElement
        let value = <number> <unknown> option.value
        this.sizeChange.emit(value)
    }

    clickNext(){
        if(! ((this.start + this.size) >= this.count)){
            this.start += Number(this.size);
            this.startChange.emit(this.start)
            this.page = this.start / 10
        }
        console.log(`size: ${this.size} page: ${this.page}  start: ${this.start}`)
    }

    clickPrev(){
        if(!(this.start == 0) && this.size < this.start){
            this.start -= this.size;
            this.startChange.emit(this.start);
            this.page = this.start / 10
        }
        else{
            this.start = 0;
            this.startChange.emit(this.start);
            this.page = this.start / 10
        }
        console.log(`size: ${this.size} page: ${this.page}  start: ${this.start}`)
    }
}
