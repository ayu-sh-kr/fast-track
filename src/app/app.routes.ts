import { Routes } from '@angular/router';
import {LoginComponent} from "./security/login/login.component";
import {RegisterComponent} from "./security/register/register.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {ProductComponent} from "./product/product.component";
import {ProductFormComponent} from "./product/product-form/product-form.component";
import {ProductTableComponent} from "./product/product-table/product-table.component";
import {ProductUploadComponent} from "./product/product-upload/product-upload.component";
import {ProductDownloadComponent} from "./product/product-download/product-download.component";
import {ShipmentComponent} from "./shipment/shipment.component";
import {ShipmentFormComponent} from "./shipment/shipment-form/shipment-form.component";
import {ShipmentTableComponent} from "./shipment-table/shipment-table.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'register',
        component: RegisterComponent
    },

    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'product',
                component: ProductComponent,
                children: [
                    {
                        path: 'add',
                        component: ProductFormComponent
                    },

                    {
                        path: '',
                        component: ProductTableComponent
                    },

                    {
                        path: 'upload',
                        component: ProductUploadComponent
                    },

                    {
                        path: 'download',
                        component: ProductDownloadComponent
                    }
                ]
            },

            {
                path: 'shipment',
                component: ShipmentComponent,
                children: [
                    {
                        path: '',
                        component: ShipmentFormComponent
                    },

                    {
                        path: 'table',
                        component: ShipmentTableComponent
                    }
                ]
            }
        ]
    }
];
