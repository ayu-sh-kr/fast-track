import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CellComponent} from "../../utils/cell/cell.component";
import {ButtonDeleteComponent} from "../../utils/element/button-delete/button-delete.component";
import {ButtonUpdateComponent} from "../../utils/element/button-update/button-update.component";
import {TableSubheaderComponent} from "./table-subheader/table-subheader.component";
import {TablePaginationComponent} from "./table-pagination/table-pagination.component";
import {TableBodyComponent} from "../../utils/table-body/table-body.component";



@Component({
  selector: 'app-product-table',
  standalone: true,
    imports: [
        FormsModule,
        CellComponent,
        ButtonDeleteComponent,
        ButtonUpdateComponent,
        TableSubheaderComponent,
        TablePaginationComponent,
        TableBodyComponent
    ],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {

    colName: string[] = [
        'Product Name', 'Producer Name', 'Producer Email',
        'Producer Phone', 'Weight', 'Category', 'Action'
    ];

    products:ProductElement[] = [
        {
            name: 'Product 1',
            description: 'Description 1',
            producerName: 'Producer 1',
            producerEmail: 'producer1@example.com',
            producerPhone: 1234567890,
            weight: 100,
            category: Category.DELICATE,
            receivingDate: new Date('2022-01-01')
        },
        {
            name: 'Product 2',
            description: 'Description 2',
            producerName: 'Producer 2',
            producerEmail: 'producer2@example.com',
            producerPhone: 2345678901,
            weight: 200,
            category: Category.DELICATE,
            receivingDate: new Date('2022-02-02')
        },
        {
            name: 'Product 3',
            description: 'Description 3',
            producerName: 'Producer 3',
            producerEmail: 'producer3@example.com',
            producerPhone: 3456789012,
            weight: 300,
            category: Category.DELICATE,
            receivingDate: new Date('2022-03-03')
        },
        {
            name: 'Product 4',
            description: 'Description 4',
            producerName: 'Producer 4',
            producerEmail: 'producer4@example.com',
            producerPhone: 4567890123,
            weight: 400,
            category: Category.HEAVY,
            receivingDate: new Date('2022-04-04')
        },
        {
            name: 'Product 5',
            description: 'Description 5',
            producerName: 'Producer 5',
            producerEmail: 'producer5@example.com',
            producerPhone: 5678901234,
            weight: 500,
            category: Category.METAL,
            receivingDate: new Date('2022-05-05')
        },
        {
            name: 'Product 1',
            description: 'Description 1',
            producerName: 'Producer 1',
            producerEmail: 'producer1@example.com',
            producerPhone: 1234567890,
            weight: 100,
            category: Category.DELICATE,
            receivingDate: new Date('2022-01-01')
        },
        {
            name: 'Product 2',
            description: 'Description 2',
            producerName: 'Producer 2',
            producerEmail: 'producer2@example.com',
            producerPhone: 2345678901,
            weight: 200,
            category: Category.DELICATE,
            receivingDate: new Date('2022-02-02')
        },
        {
            name: 'Product 3',
            description: 'Description 3',
            producerName: 'Producer 3',
            producerEmail: 'producer3@example.com',
            producerPhone: 3456789012,
            weight: 300,
            category: Category.DELICATE,
            receivingDate: new Date('2022-03-03')
        },
        {
            name: 'Product 4',
            description: 'Description 4',
            producerName: 'Producer 4',
            producerEmail: 'producer4@example.com',
            producerPhone: 4567890123,
            weight: 400,
            category: Category.HEAVY,
            receivingDate: new Date('2022-04-04')
        },
        {
            name: 'Product 5',
            description: 'Description 5',
            producerName: 'Producer 5',
            producerEmail: 'producer5@example.com',
            producerPhone: 5678901234,
            weight: 500,
            category: Category.METAL,
            receivingDate: new Date('2022-05-05')
        },
        {
            name: 'Product 1',
            description: 'Description 1',
            producerName: 'Producer 1',
            producerEmail: 'producer1@example.com',
            producerPhone: 1234567890,
            weight: 100,
            category: Category.DELICATE,
            receivingDate: new Date('2022-01-01')
        },
        {
            name: 'Product 2',
            description: 'Description 2',
            producerName: 'Producer 2',
            producerEmail: 'producer2@example.com',
            producerPhone: 2345678901,
            weight: 200,
            category: Category.DELICATE,
            receivingDate: new Date('2022-02-02')
        },
        {
            name: 'Product 3',
            description: 'Description 3',
            producerName: 'Producer 3',
            producerEmail: 'producer3@example.com',
            producerPhone: 3456789012,
            weight: 300,
            category: Category.DELICATE,
            receivingDate: new Date('2022-03-03')
        },
        {
            name: 'Product 4',
            description: 'Description 4',
            producerName: 'Producer 4',
            producerEmail: 'producer4@example.com',
            producerPhone: 4567890123,
            weight: 400,
            category: Category.HEAVY,
            receivingDate: new Date('2022-04-04')
        },
        {
            name: 'Product 5',
            description: 'Description 5',
            producerName: 'Producer 5',
            producerEmail: 'producer5@example.com',
            producerPhone: 5678901234,
            weight: 500,
            category: Category.METAL,
            receivingDate: new Date('2022-05-05')
        },
        {
            name: 'Product 1',
            description: 'Description 1',
            producerName: 'Producer 1',
            producerEmail: 'producer1@example.com',
            producerPhone: 1234567890,
            weight: 100,
            category: Category.DELICATE,
            receivingDate: new Date('2022-01-01')
        },
        {
            name: 'Product 2',
            description: 'Description 2',
            producerName: 'Producer 2',
            producerEmail: 'producer2@example.com',
            producerPhone: 2345678901,
            weight: 200,
            category: Category.DELICATE,
            receivingDate: new Date('2022-02-02')
        },
        {
            name: 'Product 3',
            description: 'Description 3',
            producerName: 'Producer 3',
            producerEmail: 'producer3@example.com',
            producerPhone: 3456789012,
            weight: 300,
            category: Category.DELICATE,
            receivingDate: new Date('2022-03-03')
        },
        {
            name: 'Product 4',
            description: 'Description 4',
            producerName: 'Producer 4',
            producerEmail: 'producer4@example.com',
            producerPhone: 4567890123,
            weight: 400,
            category: Category.HEAVY,
            receivingDate: new Date('2022-04-04')
        },
        {
            name: 'Product 5',
            description: 'Description 5',
            producerName: 'Producer 5',
            producerEmail: 'producer5@example.com',
            producerPhone: 5678901234,
            weight: 500,
            category: Category.METAL,
            receivingDate: new Date('2022-05-05')
        },
        {
            name: 'Product 1',
            description: 'Description 1',
            producerName: 'Producer 1',
            producerEmail: 'producer1@example.com',
            producerPhone: 1234567890,
            weight: 100,
            category: Category.DELICATE,
            receivingDate: new Date('2022-01-01')
        },
        {
            name: 'Product 2',
            description: 'Description 2',
            producerName: 'Producer 2',
            producerEmail: 'producer2@example.com',
            producerPhone: 2345678901,
            weight: 200,
            category: Category.DELICATE,
            receivingDate: new Date('2022-02-02')
        },
        {
            name: 'Product 3',
            description: 'Description 3',
            producerName: 'Producer 3',
            producerEmail: 'producer3@example.com',
            producerPhone: 3456789012,
            weight: 300,
            category: Category.DELICATE,
            receivingDate: new Date('2022-03-03')
        },
        {
            name: 'Product 4',
            description: 'Description 4',
            producerName: 'Producer 4',
            producerEmail: 'producer4@example.com',
            producerPhone: 4567890123,
            weight: 400,
            category: Category.HEAVY,
            receivingDate: new Date('2022-04-04')
        },
        {
            name: 'Product 5',
            description: 'Description 5',
            producerName: 'Producer 5',
            producerEmail: 'producer5@example.com',
            producerPhone: 5678901234,
            weight: 500,
            category: Category.METAL,
            receivingDate: new Date('2022-05-05')
        },
        {
            name: 'Product 1',
            description: 'Description 1',
            producerName: 'Producer 1',
            producerEmail: 'producer1@example.com',
            producerPhone: 1234567890,
            weight: 100,
            category: Category.DELICATE,
            receivingDate: new Date('2022-01-01')
        },
        {
            name: 'Product 2',
            description: 'Description 2',
            producerName: 'Producer 2',
            producerEmail: 'producer2@example.com',
            producerPhone: 2345678901,
            weight: 200,
            category: Category.DELICATE,
            receivingDate: new Date('2022-02-02')
        },
        {
            name: 'Product 3',
            description: 'Description 3',
            producerName: 'Producer 3',
            producerEmail: 'producer3@example.com',
            producerPhone: 3456789012,
            weight: 300,
            category: Category.DELICATE,
            receivingDate: new Date('2022-03-03')
        },
        {
            name: 'Product 4',
            description: 'Description 4',
            producerName: 'Producer 4',
            producerEmail: 'producer4@example.com',
            producerPhone: 4567890123,
            weight: 400,
            category: Category.HEAVY,
            receivingDate: new Date('2022-04-04')
        },
        {
            name: 'Product 5',
            description: 'Description 5',
            producerName: 'Producer 5',
            producerEmail: 'producer5@example.com',
            producerPhone: 5678901234,
            weight: 500,
            category: Category.METAL,
            receivingDate: new Date('2022-05-05')
        },
    ]

    index: number = -1;

    size: number = 10;

    start = 0;

    end = this.start + this.size;


    paginatedProducts:ProductElement[] = []

    handleAddClick(product: ProductElement) {
        this.products.push(product);
    }

    paginate(){
        console.log(this.size)
        console.log(this.paginatedProducts.length)
        this.paginatedProducts = this.products.slice(this.start, this.end);
    }

    handleSizeChange(size: number) {
        this.size = size;
    }
}

export interface ProductElement {
    name:string
    description:string
    producerName:string
    producerEmail:string
    producerPhone:number
    weight:number
    category:Category
    receivingDate:Date
}

export enum Category{
    DELICATE="Delicate" , HEAVY="Heavy", LIGHT="Light", METAL="Metal"
}

