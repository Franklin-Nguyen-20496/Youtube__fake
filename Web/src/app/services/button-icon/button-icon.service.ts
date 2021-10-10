import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ButtonIconService {
    private isMouseUp?: boolean;
    private subject: Subject<any> = new Subject();

    constructor() {}

    getEventMouseUp(): void {
        this.isMouseUp = true;
        this.subject.next(this.isMouseUp);
        // console.log(this.isMouseUp);
    }

    handleEventMouseUp(): Observable<any> {
        return this.subject.asObservable();
    }
}
