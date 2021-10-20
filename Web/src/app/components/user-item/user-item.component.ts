import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { USER } from '../../Model/User/user';
import * as $ from 'jquery';

@Component({
    selector: 'app-user-item',
    templateUrl: './user-item.component.html',
    styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
    @Input() user: USER = {
        id: 1,
        name: 'Hoàng',
        linkImg:
            'https://yt3.ggpht.com/yti/APfAmoEID-BpDbCQ3G_0FdDDkE8dd35BCMSac5pQgnhz=s88-c-k-c0x00ffffff-no-rj-mo',
        status: 1,
    };
    @Input() display: boolean = true;

    @Output() userClick: EventEmitter<USER> = new EventEmitter();

    color?: string;
    fontsize?: string;
    bgColor?: string;

    constructor() { }

    ngOnInit(color?: string, fontsize?: number) {
        if (this.user.status === 2) {
            this.color = '#f00';
            this.fontsize = '10px';
        } else if (this.user.status === 1) {
            this.color = '#3ea6ff';
            this.fontsize = '4px';
        }
    }

    onClick() {
        this.userClick.emit(this.user);
        console.log(this.user);
    }

    handleClassStatus(): any {
        if (this.user.status === 2) {
            return 'fas fa-rss';
        } else if (this.user.status === 1) {
            return 'fas fa-circle';
        } else return '';
    }

    onMousedown(): void {
        this.bgColor = 'rgb(163, 158, 158)';
        $('.user-item').mousedown((event) => {
            event.preventDefault();
        });
    }

    onMouseup(): void {
        setTimeout(() => {
            this.bgColor = '#212121';
        }, 400);
    }

    onMouseover(): void {
        this.bgColor = '#383838';
    }

    onMouseout(): void {
        this.bgColor = '#212121';
    }
}
