import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatButton} from "@angular/material/button";
import {MatListItem, MatNavList} from "@angular/material/list";
import {NgForOf} from "@angular/common";

interface SideBarItem {
    name:string,
    path:string
}

@Component({
  selector: 'app-product',
  standalone: true,
    imports: [
        RouterOutlet,
        MatSidenav,
        MatSidenavContainer,
        MatSidenavContent,
        MatButton,
        MatNavList,
        RouterLink,
        MatListItem,
        NgForOf
    ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

    opened = false;

    sideBarItems:SideBarItem[] = [
        {
            name: 'Products',
            path: '/admin/product'
        },

        {
            name: "Form",
            path: 'add'
        },

        {
            name: 'Download',
            path: 'download'
        },

        {
            name: 'Upload',
            path: 'upload'
        }
    ]
}
