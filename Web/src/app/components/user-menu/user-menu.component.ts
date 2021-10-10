import { Component, OnInit } from '@angular/core';
import { USER } from '../../Model/User/user';
import { UiService } from './../../services/ui/ui.service';

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
        password: '123',
        created: new Date(),
    };

    constructor(private UiService: UiService) {
        this.UiService.handleUserMenu().subscribe((value) => {
            this.isShowUserMenu = value;
        });
    }

    ngOnInit(): void {}

    UserClick(user: USER) {
        // this.user = user;
        this.UiService.toggleUserMenu();
        this.UiService.resetWhenShowUserMenu();
    }
}
