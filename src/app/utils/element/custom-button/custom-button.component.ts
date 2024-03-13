import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-button',
    standalone: true,
    imports: [],
    templateUrl: './custom-button.component.html',
    styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {

    @Input()
    css!:string;

    @Input()
    type!:string

    @Input()
    disabled = false;

    @Input()
    text!: string;

}
