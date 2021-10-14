import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UiService {
    constructor() { }

    private isShowLeftbar?: boolean;
    private subject: Subject<any> = new Subject();

    private isShowNavCreatVideo?: boolean;
    private subject2: Subject<any> = new Subject();

    private isShowNavMenu?: boolean;
    private subject3: Subject<any> = new Subject();

    private isShowNotify?: boolean;
    private subject4: Subject<any> = new Subject();

    private isShowUserMenu?: boolean;
    private subject5: Subject<any> = new Subject();

    private isShowNavbar: boolean = true;
    private subject6: Subject<any> = new Subject();

    private isShowResponseCommentInput!: boolean;
    private subject7: Subject<boolean> = new Subject();

    private isResetAllSettingComment!: boolean;
    private subject8: Subject<boolean> = new Subject();

    getShowLeftbar(): void {
        this.isShowLeftbar = true;
        this.subject.next(this.isShowLeftbar);
    }

    getHideLeftbar() {
        this.isShowLeftbar = false;
        this.subject.next(this.isShowLeftbar);
    }

    handleToggleLeftbar(): Observable<boolean> {
        return this.subject.asObservable();
    }

    toggleNavCreatVideo() {
        this.isShowNavCreatVideo = !this.isShowNavCreatVideo;
        this.subject2.next(this.isShowNavCreatVideo);
    }

    getHideNavCreatVideo() {
        this.isShowNavCreatVideo = false;
        this.subject2.next(this.isShowNavCreatVideo);
    }

    handleNavCreatVideo(): Observable<boolean> {
        return this.subject2.asObservable();
    }

    // Nav menu
    toggleNavMenu() {
        this.isShowNavMenu = !this.isShowNavMenu;
        this.subject3.next(this.isShowNavMenu);
    }

    getHideNavMenu() {
        this.isShowNavMenu = false;
        this.subject3.next(this.isShowNavMenu);
    }

    handleNavMenu(): Observable<boolean> {
        return this.subject3.asObservable();
    }

    // Notify
    toggleNotify() {
        this.isShowNotify = !this.isShowNotify;
        this.subject4.next(this.isShowNotify);
    }

    getHideNotify() {
        this.isShowNotify = false;
        this.subject4.next(this.isShowNotify);
    }

    handleNotify(): Observable<boolean> {
        return this.subject4.asObservable();
    }

    // User menu
    toggleUserMenu() {
        this.isShowUserMenu = !this.isShowUserMenu;
        this.subject5.next(this.isShowUserMenu);
    }

    getHideUserMenu() {
        this.isShowUserMenu = false;
        this.subject5.next(this.isShowUserMenu);
    }

    handleUserMenu(): Observable<boolean> {
        return this.subject5.asObservable();
    }

    // reset show nav create Video
    resetWhenshowNavCreatVideo() {
        this.isShowNavMenu = false;
        this.subject3.next(this.isShowNavMenu);

        this.isShowNotify = false;
        this.subject4.next(this.isShowNotify);

        this.isShowUserMenu = false;
        this.subject5.next(this.isShowUserMenu);
    }

    // reset show nav Menu
    resetWhenshowNavMenu() {
        this.isShowNavCreatVideo = false;
        this.subject2.next(this.isShowNavCreatVideo);

        this.isShowNotify = false;
        this.subject4.next(this.isShowNotify);

        this.isShowUserMenu = false;
        this.subject5.next(this.isShowUserMenu);
    }

    // reset when show notify
    resetWhenshowNotify() {
        this.isShowNavCreatVideo = false;
        this.subject2.next(this.isShowNavCreatVideo);

        this.isShowNavMenu = false;
        this.subject3.next(this.isShowNavMenu);

        this.isShowUserMenu = false;
        this.subject5.next(this.isShowUserMenu);
    }

    // reset when show User menu
    resetWhenShowUserMenu() {
        this.isShowNavCreatVideo = false;
        this.subject2.next(this.isShowNavCreatVideo);

        this.isShowNavMenu = false;
        this.subject3.next(this.isShowNavMenu);

        this.isShowNotify = false;
        this.subject4.next(this.isShowNotify);
    }

    //  reset All
    resetAll() {
        this.isShowNavMenu = false;
        this.subject3.next(this.isShowNavMenu);

        this.isShowNavCreatVideo = false;
        this.subject2.next(this.isShowNavCreatVideo);

        this.isShowNotify = false;
        this.subject4.next(this.isShowNotify);

        this.isShowUserMenu = false;
        this.subject5.next(this.isShowUserMenu);

        this.isResetAllSettingComment = false;
        this.subject8.next(this.isResetAllSettingComment);
    }

    // navbar trang chủ
    toggleNavbar() {
        this.isShowNavbar = !this.isShowNavbar;
        this.subject6.next(this.isShowNavbar);
    }

    handleNavbar(): Observable<boolean> {
        return this.subject6.asObservable();
    }

    // Handle response form input comment
    getShowResponseCommentInput(): void {
        this.isShowResponseCommentInput = true;
        this.subject7.next(this.isShowResponseCommentInput);
    }

    getHideResponseCommentInput() {
        this.isShowResponseCommentInput = false;
        this.subject7.next(this.isShowResponseCommentInput);
    }

    handleResponseCommentInput(): Observable<boolean> {
        return this.subject7.asObservable();
    }

    // Handle setting comment

    getHideSettingComment() {
        this.isResetAllSettingComment = false;
        this.subject8.next(this.isResetAllSettingComment);
    }

    handleSettingComment(): Observable<boolean> {
        return this.subject8.asObservable();
    }


}
