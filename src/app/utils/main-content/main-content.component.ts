import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'main-content',
  standalone: true,
    imports: [
        MatListItem,
        MatNavList,
        MatSidenav,
        MatSidenavContainer,
        MatSidenavContent,
        RouterOutlet,
        RouterLink
    ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

    @Input()
    opened: boolean = false;

    @Output()
    openedChange = new EventEmitter<boolean>();

    @Input()
    sideBarItems!:NavItems[]

}
