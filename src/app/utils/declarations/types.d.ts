
declare interface Address {
    country:string,
    state:string
    city:string
    zipcode:number
    street:string
    addressLine1:string
    addressLine2:string
}

declare interface Shipment {
    shipmentId:string
    origin:string
    shipmentStatus:string
    destination:string
    productId:string
    dispatchDate:Date
    deliveryTime:Date
}

declare enum ShipmentStatus{
    DELIVERED = 'Delivered',
    PROCESSING = 'Processing',
    DISPATCHED = 'Dispatched',
    IN_TRANSITS = 'In-transits',
    NEARBY = 'Nearby',
    ARRIVED = 'Arrived',
    DISPATCHING = 'Dispatching'
}


declare interface NavItems {
    name:string,
    path:string
}
