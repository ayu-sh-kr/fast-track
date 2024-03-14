import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css'
})
export class CellComponent {

    disabled: boolean = false;

    @Input()
    text: any = "This is the inner text";

    @Output()
    textChange = new EventEmitter<string>();

    @Input()
    css:string = 'w-full focus:bg-green-200 rounded-md border p-2';

    enableDisabled() {
        this.disabled = true
    }

    disableEditable(event: Event) {
        this.disabled = false;
        let element = event.target as HTMLElement;
        this.textChange.emit(element.innerText);
        this.text = element.innerText;
    }
}