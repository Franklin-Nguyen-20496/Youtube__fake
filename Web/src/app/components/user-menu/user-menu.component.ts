import { Component, OnInit } from '@angular/core';
import { USER } from '../../Model/User/user';
import { UiService } from './../../services/ui/ui.service';
import { UsersService } from '../../services/users/users.service';
import { LocalStorageHelper } from '../../shared/local-storage-helper';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent implements OnInit {
    isShowUserMenu: boolean = false;

    user: USER = {
        id: 1,
        name: 'Hoàng',
        linkImg:
            'https://yt3.ggpht.com/yti/APfAmoEID-BpDbCQ3G_0FdDDkE8dd35BCMSac5pQgnhz=s88-c-k-c0x00ffffff-no-rj-mo',
        status: 1,
    };

    constructor(
        private UiService: UiService,
        private usersService: UsersService,
        private localStorageHelper: LocalStorageHelper,
    ) {
        this.UiService.handleUserMenu().subscribe((value) => {
            this.isShowUserMenu = value;
        });

        this.localStorageHelper.handleUserInfoWhenLogin().subscribe((id) => {
            this.usersService.getUserByID(id).subscribe((auth) => {
                this.user = auth;
            })
        })
    }

    ngOnInit(): void {
        const authId = this.localStorageHelper.getUserInfo();
        this.usersService.getUserByID(authId).subscribe((auth) => {
            this.user = auth;
        })
    }

    UserClick(user: USER) {
        // this.user = user;
        this.UiService.toggleUserMenu();
        this.UiService.resetWhenShowUserMenu();
    }
}
