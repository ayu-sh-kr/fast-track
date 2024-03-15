import { Component } from '@angular/core';
import {EventService} from "../service/event.service";
import {MainContentComponent} from "../utils/main-content/main-content.component";

@Component({
  selector: 'app-shipment',
  standalone: true,
    imports: [
        MainContentComponent
    ],
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.css'
})
export class ShipmentComponent {

    sideBarItems:NavItems[] = [
        {
            name: 'Shipment Form',
            path: 'form'
        },

        {
            name: 'Shipment Table',
            path: 'table'
        },

        {
            name: 'Billing',
            path: 'billing'
        }
    ]

    opened: boolean = false;

    constructor(private eventService: EventService<boolean>) {
        this.eventService.getEvent().subscribe(data => this.opened = data);
    }
}
