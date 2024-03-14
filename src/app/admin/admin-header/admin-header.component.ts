import { Component } from '@angular/core';
import {LogoComponent} from "../../utils/logo/logo.component";
import {RouterLink} from "@angular/router";
import {EventService} from "../../service/event.service";

@Component({
  selector: 'admin-header',
  standalone: true,
    imports: [
        LogoComponent,
        RouterLink
    ],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {

    opened = false;

    constructor(private eventService: EventService<boolean>) {
    }

    openNav() {
        this.eventService.trigger(this.opened);
    }

}
