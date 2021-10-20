
import { Component, OnInit } from '@angular/core';
import { USER } from '../../Model/User/user';
import { UsersService } from '../../services/users/users.service';
import { UiService } from '../../services/ui/ui.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

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

    constructor(
        private usersService: UsersService,
        private router: Router,
        private uiService: UiService
    ) { }

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

            this.users = data;
            const length = this.users.length;
            this.users1 = this.users.slice(0, 7);
            this.users2 = this.users.slice(7, length);

            if (this.users2 === null) {
                this.isUsers2 = false;
            } else {
                this.isUsers2 = true;
                this.title2 = `Xem thêm ${length - 7} người khác`;
                this.title1 = `Ẩn bớt ${length - 7} người khác`;
            }
        });
    }

    UserClick(user?: USER) {
        console.log(user);
    }

    toggleUsers2() {
        if (this.display) {
            this.display = false;
        }
        else {
            this.display = true;
        }
        console.log('toggleUsers2')
    }

    goHome() {
        $('document').ready(() => {
            $('#left-bar').animate({
                left: '-240px',
            });
        });
        this.uiService.getHideLeftbar();
        this.router.navigate(['/'])
    }

    goUserLogin() {
        $('document').ready(() => {
            $('#left-bar').animate({
                left: '-240px',
            });
        });
        this.uiService.getHideLeftbar();
        this.router.navigate(['/logging'])
    }

    goCreateUser() {
        $('document').ready(() => {
            $('#left-bar').animate({
                left: '-240px',
            });
        });
        this.uiService.getHideLeftbar();
        this.router.navigate(['/user'])
    }

    goCreateVideo() {
        $('document').ready(() => {
            $('#left-bar').animate({
                left: '-240px',
            });
        });
        this.uiService.getHideLeftbar();
        this.router.navigate(['/videos/create']);
    }
}
