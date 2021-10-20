import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { USER } from '../../Model/User/user';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': '',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class AuthorService {
    constructor(private http: HttpClient) { }

    private auth: USER = {
        id: 1,
        name: 'Hoàng Nguyễn',
        linkImg:
            'https://yt3.ggpht.com/yti/APfAmoEID-BpDbCQ3G_0FdDDkE8dd35BCMSac5pQgnhz=s88-c-k-c0x00ffffff-no-rj-mo',
        status: 1,
    };

    private subject: Subject<any> = new Subject();
    private apiUrl: string = 'http://localhost:3004/users/account';
    private accUrl: string = 'http://localhost:3004/auth';

    getAccount(user: Object): Observable<any> {
        return this.http.post<any>(this.apiUrl, user, httpOptions);
    }

    saveAccount(auth: USER): void {
        this.auth = auth;
        this.subject.next(this.auth);
    }

    handleAccount(): Observable<USER> {
        return this.subject.asObservable();
    }

    getAccountWhenReload(): Observable<USER> {
        return this.http.get<USER>(this.accUrl);
    }

    loginWithEmailAndPassword(user: string, password: string): Observable<any> {
        const authHeader = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `${user}:${password}`,
            }),
        };
        console.log('httpOptions.headers', authHeader.headers);
        return this.http.post<any>(this.apiUrl, null, authHeader);
    }

}
