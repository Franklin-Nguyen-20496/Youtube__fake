import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { USER } from '../../Model/User/user';
import { UsersService } from '../../services/users/users.service';
import { LocalStorageHelper } from '../../shared/local-storage-helper';

@Component({
    selector: 'app-user-btn',
    templateUrl: './user-btn.component.html',
    styleUrls: ['./user-btn.component.css'],
})
export class UserBtnComponent implements OnInit {
    @Output() userClick: EventEmitter<USER> = new EventEmitter();

    auth: USER = {
        id: 1,
        name: 'Hoàng Nguyễn',
        linkImg: '',
        status: 1,
    };

    constructor(
        private usersService: UsersService,
        private localStorageHelper: LocalStorageHelper,
    ) {
        this.localStorageHelper.handleUserInfoWhenLogin().subscribe((id) => {
            this.usersService.getUserByID(id).subscribe((auth) => {
                this.auth = auth;
            })
        })
    }

    ngOnInit(): void {
        const authId = this.localStorageHelper.getUserInfo();
        this.usersService.getUserByID(authId).subscribe((auth) => {
            this.auth = auth;
        })
    }

    btnClick() {
        this.userClick.emit(this.auth);
    }
}
