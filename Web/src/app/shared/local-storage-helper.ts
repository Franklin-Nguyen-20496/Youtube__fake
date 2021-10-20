import { identifierName } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class LocalStorageHelper {
    USER_KEY = 'user';
    LOGIN_INFO = 'login_info';
    private authId!: number;
    private subject: Subject<any> = new Subject();

    constructor() {
    }

    setLoginInfo(value: string) {
        localStorage.setItem(this.LOGIN_INFO, JSON.stringify(value));

    }

    getLoginInfo() {
        const loginInfo = localStorage.getItem(this.LOGIN_INFO);
        return loginInfo ? JSON.parse(loginInfo) : null;
    }

    setUserInfo(id: number) {
        localStorage.setItem(this.USER_KEY, JSON.stringify(id));
        this.authId = id;
        this.subject.next(this.authId);
    }

    getUserInfo(): number {
        const id = localStorage.getItem(this.USER_KEY);
        return id ? JSON.parse(id) : null;
    }

    handleUserInfoWhenLogin() {
        return this.subject.asObservable();
    }
}