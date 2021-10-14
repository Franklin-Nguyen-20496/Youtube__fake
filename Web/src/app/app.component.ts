import { Component, Output, EventEmitter } from '@angular/core';
import { USER } from './Model/User/user';
import { ButtonIconService } from './services/button-icon/button-icon.service';
import { Router } from '@angular/router';
import { UsersService } from './services/users/users.service';
import { UiService } from './services/ui/ui.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'youtube-fake';
    isMouseUp: boolean = true;
    users: USER[] = [];
    isShowNavCreatVideo: boolean = false;
    isShowNavMenu: boolean = false;
    isShowNotify: boolean = false;
    isShowNavbar: boolean = true;
    notIsShowNavbar: boolean = false;

    constructor(
        private buttonIconService: ButtonIconService,
        private usersService: UsersService,
        private uiService: UiService,
        private router: Router,
    ) {
        // handle button-icon  mouseup
        const subscription = this.buttonIconService
            .handleEventMouseUp()
            .subscribe((value) => (this.isMouseUp = value));
        // subscription.unsubscribe();

        // handle user-item  mouseup
        this.usersService.getUsers().subscribe((values) => {
            this.users = values;
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
        this.uiService.handleNavbar().subscribe((value) => {
            this.isShowNavbar = value;
            this.notIsShowNavbar = !value;
        });
    }

    appMouseUp() {
        // console.log('appMouseUp');
        this.buttonIconService.getEventMouseUp();
    }

    appClick() {
        this.uiService.getHideNavCreatVideo();
        this.uiService.getHideNavMenu();
        this.uiService.getHideNotify();
        this.uiService.getHideUserMenu();
        this.uiService.getHideSettingComment();
        console.log('app click');
    }

    hasRoute(route: string): boolean {
        return this.router.url === route;
    }
}
