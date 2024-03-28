import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatDatepicker} from "@angular/material/datepicker";

@Component({
    selector: 'input-element',
    standalone: true,
    imports: [
    ],
    templateUrl: './input-element.component.html',
    styleUrl: './input-element.component.css'
})
export class InputElementComponent {

    @Input()
    type:string = 'text';

    @Input()
    placeholder!: string;

    @Input()
    class!:string

    @Input()
    label!:string

    @ViewChild('picker') datePicker!: MatDatepicker<Date>;

    @Input()
    data:any;

    @Output()
    dataChange = new EventEmitter<any>();

    @ViewChild('inputElement') inputElement!: ElementRef;

    updateData(event: KeyboardEvent) {
        let element = event.target as HTMLInputElement;
        console.log(element.value)
        this.dataChange.emit(element.value);
    }

    focusInput(): void {
        this.inputElement.nativeElement.focus();
    }
}
