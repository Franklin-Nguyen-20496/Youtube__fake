import { Component, OnInit } from '@angular/core';
import { USER } from '../../Model/User/user';
import { UsersService } from '../../services/users/users.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    users: USER[] = [];
    users1: USER[] = [];
    users2: USER[] = [];
    display: boolean = false;
    title1: string = 'Ẩn bớt';
    title2: string = '';
    isUsers2: boolean = false;

    constructor(private usersService: UsersService, private router: Router) { }

    ngOnInit(): void {
        this.usersService.getUsers().subscribe((data) => {
            // this.users = values;
            const usersStream = data.filter((value, index) => {
                return value.status === 2;
            });

            const usersOnline = data.filter((value, index) => {
                return value.status === 1;
            });

            const usersOffline = data.filter((value, index) => {
                return value.status === 0;
            });

            this.users = usersStream.concat(usersOnline.concat(usersOffline));
            const lenght = this.users.length;
            this.users1 = this.users.slice(0, 7);
            this.users2 = this.users.slice(7, lenght);
            this.title2 = `Xem thêm ${this.users2.length} người khác`;
            if (this.users2 === []) {
                this.isUsers2 = false;
            } else {
                this.isUsers2 = true;
            }
        });
    }

    goHome() {
        this.router.navigate(['/']);
    }

    UserClick(user?: USER) {
        console.log(user);
    }

    toggleUsers2() {
        this.display = !this.display;
    }
}
