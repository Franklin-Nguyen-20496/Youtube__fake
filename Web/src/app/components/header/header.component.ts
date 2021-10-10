import { Component, OnInit, Input } from '@angular/core';
import { UiService } from '../../services/ui/ui.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    bgColor: string = '#202020';
    color: string = '#fff';
    borderColor: string = '';
    isShowLeftbar: boolean = false;
    isShowNavCreatVideo: boolean = false;
    isShowNavMenu: boolean = false;
    isShowNotify: boolean = false;

    constructor(private uiService: UiService, private router: Router) {
        this.uiService.handleToggleLeftbar().subscribe((value) => {
            this.isShowLeftbar = value;
        });

        // handle click hide nav_creat-videos
        this.uiService.handleNavCreatVideo().subscribe((value) => {
            this.isShowNavCreatVideo = value;
        });

        // handle click hide nav_menu
        this.uiService.handleNavMenu().subscribe((value) => {
            this.isShowNavMenu = value;
        });

        // handle click hide Notify
        this.uiService.handleNotify().subscribe((value) => {
            this.isShowNotify = value;
        });

        // handle toggle navbar
        this.uiService.handleNavbar().subscribe();
    }

    ngOnInit(): void {
        $('.header-left__logo').mousedown((event) => {
            event.preventDefault();
        });

        $('header-right__bell').mousedown((event) => {
            event.preventDefault();
        });

        $('.search__keyboarch input').focusin(() => {
            this.borderColor = '#1c62b9';
        });

        $('.search__keyboarch input').focusout(() => {
            this.borderColor = '';
        });

        $('.btn-icon').click((event) => {
            event.stopPropagation();
        });
    }

    showLeftbar() {
        $('document').ready(() => {
            $('#left-bar').animate({
                left: '0px',
            });
        });
        this.uiService.getShowLeftbar();
        this.uiService.resetAll();
    }

    showNavCreatVideo() {
        this.uiService.toggleNavCreatVideo();
        this.uiService.resetWhenshowNavCreatVideo();
    }

    showNavMenu() {
        this.uiService.toggleNavMenu();
        this.uiService.resetWhenshowNavMenu();
    }

    // nav notify
    toggleNotify() {
        this.uiService.toggleNotify();
        this.uiService.resetWhenshowNotify();
        console.log('notify');
    }

    toggleNavbar() {
        this.uiService.toggleNavbar();
    }

    hasRoute(route: string) {
        return this.router.url === route;
    }

    notHasRoute(route: string) {
        return this.router.url != route;
    }
}
