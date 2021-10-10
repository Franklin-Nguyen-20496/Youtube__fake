import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AUTH } from '../../Model/auth/auth';
import { UsersService } from '../../services/users/users.service';
import { AuthorService } from '../../services/auth/author.service';
import { data } from 'jquery';

@Component({
    selector: 'app-user-btn',
    templateUrl: './user-btn.component.html',
    styleUrls: ['./user-btn.component.css'],
})
export class UserBtnComponent implements OnInit {
    @Output() userClick: EventEmitter<AUTH> = new EventEmitter();

    auth: AUTH = {
        id: 1,
        authorId: 1,
        name: 'Hoàng Nguyễn',
        linkImg:
            'https://yt3.ggpht.com/yti/APfAmoEID-BpDbCQ3G_0FdDDkE8dd35BCMSac5pQgnhz=s88-c-k-c0x00ffffff-no-rj-mo',
        password: '123456',
        status: 1,
        created: new Date(),
    };

    constructor(
        private usersService: UsersService,
        private authorService: AuthorService,
    ) {
        this.authorService.handleAccount().subscribe((auth) => {
            this.auth = auth;
        });
    }

    ngOnInit(): void {
        this.authorService.getAccountWhenReload().subscribe((auth) => {
            this.auth = auth;
        });
    }

    btnClick() {
        this.userClick.emit(this.auth);
    }
}
