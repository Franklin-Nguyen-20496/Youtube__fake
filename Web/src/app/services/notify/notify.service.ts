import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NotifyService {
    content!: string;
    Subject: Subject<string> = new Subject();
    constructor() {}

    setNotify(content: string) {
        this.content = content;
        this.Subject.next(this.content);
    }

    handleNotify(): Observable<string> {
        return this.Subject.asObservable();
    }
}
