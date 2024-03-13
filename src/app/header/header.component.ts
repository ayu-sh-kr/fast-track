import {AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChild} from '@angular/core';
import {LowerCasePipe, NgForOf, NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ReplacePipe} from "../utils/replace.pipe";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        NgStyle,
        NgForOf,
        RouterLink,
        LowerCasePipe,
        ReplacePipe
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

    hide = false;


    navItems = ['Home', 'Menu', 'Services', 'Contact Us'];

    constructor(private renderer: Renderer2) {
    }


    setHide() {
        this.hide = !this.hide;
        console.log(this.hide)
    }
}
