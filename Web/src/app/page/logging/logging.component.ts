import { Component, OnInit } from '@angular/core';
import { USER } from '../../Model/User/user';
import { AuthorService } from '../../services/auth/author.service';
import { Router } from '@angular/router';
import { NotifyService } from '../../services/notify/notify.service';

@Component({
    selector: 'app-logging',
    templateUrl: './logging.component.html',
    styleUrls: ['./logging.component.css'],
})
export class LoggingComponent implements OnInit {
    user: USER = {
        id: 1,
        name: '',
        linkImg: '',
        status: 1,
        password: '',
        created: new Date(),
    };

    constructor(
        private authorService: AuthorService,
        private route: Router,
        private notifyService: NotifyService,
    ) { }

    ngOnInit(): void { }

    OnSubmit() {
        if (this.user.name != '' && this.user.password != '') {
            const account = {
                name: this.user.name,
                password: this.user.password,
            };

            this.authorService.getAccount(account).subscribe((value) => {
                if (typeof value === 'string') {
                    // this.route.navigate(['/logging']);
                    this.notifyService.setNotify(
                        'Tài khoản hoặc mật khẩu không đúng!',
                    );
                } else {
                    const auth = {
                        id: 1,
                        authorId: value.id,
                        name: value.name,
                        linkImg: value.linkImg,
                        password: value.password,
                        status: 1,
                        created: new Date(),
                    };

                    this.authorService.saveAccount(auth);
                    this.route.navigate(['/']);
                    // this.authorService.saveAccount(value);
                }
            });

            this.user.name = '';
            this.user.password = '';
        }
        else {
            this.notifyService.setNotify(
                'Vui lòng điền đầy đủ thông tin!',
            );
        }
    }
}
