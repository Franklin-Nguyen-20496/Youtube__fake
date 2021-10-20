import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonIconService } from '../../services/button-icon/button-icon.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-select-item',
    templateUrl: './select-item.component.html',
    styleUrls: ['./select-item.component.css'],
})
export class SelectItemComponent implements OnInit {
    @Input() icon: string = 'fas fa-home';
    @Input() title: string = 'Trang chủ';
    @Input() color: string = '#909090';
    @Output() click: EventEmitter<any> = new EventEmitter();

    isMousedown: boolean = false;
    bgColor: string = '#212121';
    event?: any;

    constructor(private buttonIconService: ButtonIconService) {
        this.buttonIconService.handleEventMouseUp().subscribe((value) => {
            this.isMousedown = !value;
        });
    }

    ngOnInit(): void { }

    selected(): void {
        this.click.emit();
        setTimeout(() => {
            this.bgColor = '#212121';
        }, 400);
    }

    onMousedown(): void {
        this.bgColor = 'rgb(163, 158, 158)';
        // $('.select-item').mousedown((event) => {
        //     event.preventDefault();
        // });
    }

    // onMouseup(): void {
    //     setTimeout(() => {
    //         this.bgColor = '#212121';
    //     }, 400);
    // }

    onMouseover(): void {
        this.bgColor = '#383838';
    }

    onMouseout(): void {
        this.bgColor = '#212121';
    }
}
