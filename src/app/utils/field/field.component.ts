import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-field',
    standalone: true,
    imports: [
        FormsModule,
        NgClass
    ],
    templateUrl: './field.component.html',
    styleUrl: './field.component.css'
})
export class FieldComponent {

    @Input()
    type!:string;

    @Input()
    data!:string

    @Output()
    dataChange = new EventEmitter<string>();

    @Input()
    check!:boolean

    @Input()
    message!:string;
}
