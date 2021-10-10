import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { USER } from '../../Model/User/user';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private apiURL: string = 'http://localhost:3004/users';

    constructor(private http: HttpClient) {}

    getUsers(): Observable<USER[]> {
        return this.http.get<USER[]>(this.apiURL);
    }

    getUserByID(id: number): Observable<USER> {
        const IdURL = `${this.apiURL}/${id}`;
        return this.http.get<USER>(IdURL);
    }

    createUser(user: Object): Observable<USER> {
        return this.http.post<USER>(this.apiURL, user, httpOptions);
    }
}
