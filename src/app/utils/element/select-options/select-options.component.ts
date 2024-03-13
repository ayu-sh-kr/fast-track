import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'select-options',
  standalone: true,
  imports: [],
  templateUrl: './select-options.component.html',
  styleUrl: './select-options.component.css'
})
export class SelectOptionsComponent {
    @Input()
    value!:number[]
}
