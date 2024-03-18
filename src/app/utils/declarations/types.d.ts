
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
    shipmentStatus:ShipmentStatus
    destination:string
    productId:string
    dispatchDate:number
    deliveryTime:number
}


declare interface NavItems {
    name:string,
    path:string
}

