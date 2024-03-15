import {Component, Renderer2} from '@angular/core';
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

    hide = true;


    navItems = [
        {
            name: 'Home',
            identity: '/home'
        },

        {
            name: 'Menu',
            identity: '/home'
        },

        {
            name: 'Services',
            identity: '/home'
        },

        {
            name: 'Contact Us',
            identity: '/home#contact'
        }
    ];

    constructor(private renderer: Renderer2) {
    }


    setHide() {
        this.hide = !this.hide;
        console.log(this.hide)
    }

    handleAnimation() {
        if(this.hide){
            for(let i = 0; i < 4; i++){
                let element = document.getElementById('div' + i) as HTMLDivElement;
                element.classList.remove('nav-item')
                element.classList.add('nav-item-out')
            }
        }
        else{
            for(let i = 0; i < 4; i++){
                let element = document.getElementById('div' + i) as HTMLDivElement;
                element.classList.remove('nav-item-out')
                element.classList.add('nav-item')
            }
        }
    }
}
