import { Component, OnInit } from '@angular/core';
import { USER } from '../../Model/User/user';
import { AuthorService } from '../../services/auth/author.service';
import { Router } from '@angular/router';
import { NotifyService } from '../../services/notify/notify.service';
import { LocalStorageHelper } from '../../shared/local-storage-helper';

@Component({
    selector: 'app-logging',
    templateUrl: './logging.component.html',
    styleUrls: ['./logging.component.css'],
})
export class LoggingComponent implements OnInit {
    email: string = '';
    password: string = '';

    constructor(
        private authorService: AuthorService,
        private route: Router,
        private notifyService: NotifyService,
        private localStorageHelper: LocalStorageHelper,
    ) { }

    ngOnInit(): void { }

    OnSubmit() {
        if (this.email != '' && this.password != '') {
            console.log(this.email, this.password);

            this.authorService.loginWithEmailAndPassword(this.email, this.password).subscribe((result) => {
                console.log('result', result);
                if (typeof result === 'string') {
                    this.notifyService.setNotify('Tài khoản hoặc mật khẩu không tồn tại!!!');
                }
                else {
                    this.localStorageHelper.setUserInfo(result.uid);
                    this.localStorageHelper.setLoginInfo(result.token);
                    this.notifyService.setNotify('Đăng nhập thành công!');
                    this.route.navigate(['/']);
                }
            })

            this.email = '';
            this.password = '';
        }
        else {
            this.notifyService.setNotify(
                'Vui lòng điền đầy đủ thông tin!',
            );
        }
    }
}
