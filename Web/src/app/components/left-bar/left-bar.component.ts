import { Component, OnInit } from '@angular/core';
import { USER } from '../../Model/User/user';
import { UsersService } from '../../services/users/users.service';
import { UiService } from '../../services/ui/ui.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-left-bar',
    templateUrl: './left-bar.component.html',
    styleUrls: ['./left-bar.component.css'],
})
export class LeftBarComponent implements OnInit {
    users: USER[] = [];
    users1: USER[] = [];
    users2: USER[] = [];
    isShowLeftbar: boolean = false;
    display: boolean = false;
    title1: string = 'Ẩn bớt';
    title2: string = '';

    constructor(
        private usersService: UsersService,
        private uiService: UiService,
    ) {
        // handle toggle left bar
        this.uiService.handleToggleLeftbar().subscribe((value) => {
            this.isShowLeftbar = value;
        });
    }

    ngOnInit(): void {}

    hideLeftbar() {
        $('document').ready(() => {
            $('#left-bar').animate({
                left: '-240px',
            });
        });
        this.uiService.getHideLeftbar();
    }

    OverviewClick() {
        $('document').ready(() => {
            $('#left-bar').animate({
                left: '-240px',
            });
        });
        this.uiService.getHideLeftbar();
    }
}
