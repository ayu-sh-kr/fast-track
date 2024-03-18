import { Component } from '@angular/core';
import {ShipmentTableHeaderComponent} from "./shipment-table-header/shipment-table-header.component";
import {ShipmentTableBodyComponent} from "./shipment-table-body/shipment-table-body.component";
import {ShipmentTablePaginationComponent} from "./shipment-table-pagination/shipment-table-pagination.component";

@Component({
  selector: 'shipment-table',
  standalone: true,
    imports: [
        ShipmentTableHeaderComponent,
        ShipmentTableBodyComponent,
        ShipmentTablePaginationComponent
    ],
  templateUrl: './shipment-table.component.html',
  styleUrl: './shipment-table.component.css'
})
export class ShipmentTableComponent {

}
