import {Component} from '@angular/core';
import {InputElementComponent} from "../../utils/element/input-element/input-element.component";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "@danielmoncada/angular-datetime-picker";
import {CustomButtonComponent} from "../../utils/element/custom-button/custom-button.component";

@Component({
    selector: 'app-shipment-form',
    standalone: true,
    imports: [
        InputElementComponent,
        MatFormField,
        MatLabel,
        MatSelect,
        MatOption,
        MatInput,
        MatSuffix,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        CustomButtonComponent,
    ],
    templateUrl: './shipment-form.component.html',
    styleUrl: './shipment-form.component.css'
})
export class ShipmentFormComponent {

    options: string[] = [
        'DISPATCHED', 'DELIVERED', 'ARRIVED', 'PROCESSING',
        'IN_TRANSITS', 'DISPATCHING', 'NEARBY'
    ];
    selected: any;

    origin: Address = {
        country: '',
        state: '',
        city: '',
        zipcode: Number(''),
        street: '',
        addressLine1: '',
        addressLine2: ''
    }

    clearFields() {
        console.log('clearing...')
        console.log(this.origin)
        this.origin = {
            country: '',
            street: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            zipcode: Number('')
        };
        // Reset other fields as needed
    }

    onSubmit(){
        console.log(this.origin)
    }

}
