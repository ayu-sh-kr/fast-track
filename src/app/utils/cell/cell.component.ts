import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css'
})
export class CellComponent implements OnInit, OnChanges{

    disabled: boolean = false;

    @Input()
    text: any = "This is the inner text";

    @Output()
    textChange = new EventEmitter<any>();

    @Input()
    class:string = 'w-full focus:border-b-2 border-green-800 focus:bg-green-100 p-2';

    @Input()
    date = false;

    ngOnInit(): void {
        this.updateText()
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes){
            this.updateText()
        }
    }

    updateText(): void {
        if(this.date && this.text !== -1 && this.isEpochOrLocalDate(this.text) === 'epoch'){
            this.text = this.formatDate(this.text)
        }
    }



    enableDisabled() {
        this.disabled = true
    }

    disableEditable(event: Event) {
        this.disabled = false;
        let element = event.target as HTMLElement;
        if(this.validateDateFormat(element.innerText)){
            this.textChange.emit(this.convertDateToEpoch(element.innerText));
            this.text = element.innerText;
        }
    }

    formatDate(epoch: number): string {
        let date = new Date(epoch);
        return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
    }

    convertDateToEpoch(dateString: string): number {
        let dateParts = dateString.split("-");
        let dateObject = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
        return dateObject.getTime();
    }

    isEpochOrLocalDate(text: string): string {
        let isNumber = !isNaN(Number(text));
        if (isNumber) {
            return 'epoch';
        } else {
            let dateParts = text.split("-");
            if (dateParts.length === 3 && !isNaN(Number(dateParts[0])) && !isNaN(Number(dateParts[1])) && !isNaN(Number(dateParts[2]))) {
                return 'localDate';
            }
        }
        return 'unknown';
    }


    validateDateFormat(dateString: string): boolean {

        let dateParts = dateString.split("-");

        if (dateParts.length !== 3 || isNaN(Number(dateParts[0])) || isNaN(Number(dateParts[1])) || isNaN(Number(dateParts[2]))) {
            throw new Error('Date is not in the format "day-month-year"');
        }

        let dateObject = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
        if (isNaN(dateObject.getTime())) {
            throw new Error('Invalid date');
        }

        return true;

    }

}
