import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AUTH } from '../../Model/auth/auth';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class AuthorService {
    constructor(private http: HttpClient) { }

    private auth: AUTH = {
        id: 1,
        authorId: 1,
        name: 'Hoàng Nguyễn',
        linkImg:
            'https://yt3.ggpht.com/yti/APfAmoEID-BpDbCQ3G_0FdDDkE8dd35BCMSac5pQgnhz=s88-c-k-c0x00ffffff-no-rj-mo',
        password: '123456',
        status: 1,
        created: new Date(),
    };
    private subject: Subject<any> = new Subject();
    private apiUrl: string = 'http://localhost:3004/users/account';
    private accUrl: string = 'http://localhost:3004/auth';

    getAccount(user: Object): Observable<any> {
        return this.http.post<any>(this.apiUrl, user, httpOptions);
    }

    saveAccount(auth: AUTH): void {
        this.auth = auth;
        this.subject.next(this.auth);
    }

    handleAccount(): Observable<AUTH> {
        return this.subject.asObservable();
    }

    getAccountWhenReload(): Observable<AUTH> {
        return this.http.get<AUTH>(this.accUrl);
    }

    // handleAccount(): Observable<USER> {
    //     return this.subjectUser.asObservable();
    // }
}
