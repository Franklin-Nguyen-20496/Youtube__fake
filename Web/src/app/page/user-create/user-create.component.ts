import { Component, OnInit } from '@angular/core';
import { USER } from '../../Model/User/user';
import { UsersService } from '../../services/users/users.service';
import { Router } from '@angular/router';
import { NotifyService } from '../../services/notify/notify.service';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
    user: USER = {
        id: 1,
        name: '',
        linkImg: '',
        status: 1,
    };

    email: string = '';
    password: string = '';


    constructor(
        private usersService: UsersService,
        private route: Router,
        private notifyService: NotifyService,
    ) { }

    ngOnInit(): void { }

    onSubmit() {
        if (
            this.user.name != '' &&
            this.user.linkImg != '' &&
            this.password != ''
        ) {
            const user = {
                name: this.user.name,
                linkImg: this.user.linkImg,
                password: this.password,
                email: this.email,
                status: 1,
            };

            this.usersService.createUser(user).subscribe((value) => {
                if (typeof value === 'string') {
                    // this.route.navigate(['/user']);
                    this.notifyService.setNotify('Tên đăng nhập đã tồn tại!');
                } else {
                    this.notifyService.setNotify(
                        `Đã tạo thành công tài khoản ${value.name}`,
                    );
                    // this.route.navigate(['/']);
                }

                this.user.name = '';
                this.user.linkImg = '';
                this.password = '';
                this.email = '';
            });
        } else {
            this.notifyService.setNotify('Vui lòng điền đầy đủ thông tin!');
        }
    }
}
