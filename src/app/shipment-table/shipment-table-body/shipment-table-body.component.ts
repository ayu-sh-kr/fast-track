import {Component} from '@angular/core';
import {ShipmentStatus} from "../../utils/enums/exporter";
import {CellComponent} from "../../utils/cell/cell.component";
import {ButtonDeleteComponent} from "../../utils/element/button-delete/button-delete.component";
import {ButtonUpdateComponent} from "../../utils/element/button-update/button-update.component";

@Component({
    selector: 'shipment-table-body',
    standalone: true,
    imports: [
        CellComponent,
        ButtonDeleteComponent,
        ButtonUpdateComponent
    ],
    templateUrl: './shipment-table-body.component.html',
    styleUrl: './shipment-table-body.component.css'
})
export class ShipmentTableBodyComponent {


    columns = ['Shipment Id', 'Shipment Status', 'Product Id', 'Dispatch Date', 'Deliver Date', 'Origin', 'Destination'];

    shipments: Shipment[] = [
        {
            shipmentId: 'SID12032024',
            shipmentStatus: ShipmentStatus.PROCESSING,
            destination: 'Varanasi',
            origin: 'Jaunpur',
            productId: 'PIDH001',
            dispatchDate: new Date().getTime(),
            deliveryTime: -1
        }
    ];

    remove(shipment: Shipment) {
        this.shipments = this.shipments.filter(item => item != shipment);
    }


}

