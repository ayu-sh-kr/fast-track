import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EventService<T> {

    public navEvent = new EventEmitter<T>();

    public searchEvent = new EventEmitter<T>();

    constructor() {
    }

    trigger(data: T){
        this.navEvent.emit(data);
    }

    getEvent(){
        return this.navEvent;
    }

    triggerSearch(data: T){
        this.searchEvent.emit(data)
    }

    getSearchEvent(){
        return this.searchEvent
    }
}
