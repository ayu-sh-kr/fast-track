import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatButton} from "@angular/material/button";
import {MatListItem, MatNavList} from "@angular/material/list";
import {NgForOf} from "@angular/common";
import {EventService} from "../service/event.service";

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

    @Input()
    opened = false;

    @Output()
    openedChange = new EventEmitter<boolean>()

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

    constructor(private eventService: EventService<boolean>) {
        this.eventService.getEvent().subscribe(data => this.opened = data);
    }
}
