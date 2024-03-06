import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

    hide = false;

    setHide() {
        this.hide = !this.hide;
        console.log(this.hide)
    }
}
