import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonIconService } from '../../services/button-icon/button-icon.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-btn-icon',
    templateUrl: './btn-icon.component.html',
    styleUrls: ['./btn-icon.component.css'],
})
export class BtnIconComponent implements OnInit {
    @Input() icon: string = 'fas fa-bars';
    @Input() bgColor: string = '#202020';
    @Input() color: string = '#fff';

    @Output() iconClick: EventEmitter<any> = new EventEmitter();
    isMouseUp: boolean = true;

    // btnColor: string = "{{isMouseUp ? 'rgb(48, 41, 41)' | '#ccc'}}"

    constructor(private buttonIconService: ButtonIconService) {
        const subscription = this.buttonIconService
            .handleEventMouseUp()
            .subscribe((value) => (this.isMouseUp = value));
        // subscription.unsubscribe();
    }

    ngOnInit(): void {
        // console.log($('.btn-icon i'));
        $('.btn-icon i').mousedown(function (event) {
            event.preventDefault();
        });
    }

    IconClick(): void {
        // console.log(this.icon);
        this.iconClick.emit();
    }

    mouseDown(): void {
        this.isMouseUp = false;
    }

    mouseUp(): void {
        this.isMouseUp = true;
        // console.log('mouseup');
    }
}
