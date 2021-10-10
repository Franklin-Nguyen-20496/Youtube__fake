import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonIconService } from '../../services/button-icon/button-icon.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-btn-icon-small',
    templateUrl: './btn-icon-small.component.html',
    styleUrls: ['./btn-icon-small.component.css'],
})
export class BtnIconSmallComponent implements OnInit {
    @Input() icon: string = 'fas fa-bars';
    @Input() bgColor: string = '#202020';
    @Input() color: string = '#fff';

    @Output() click: EventEmitter<any> = new EventEmitter();
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
        this.click.emit();
    }

    mouseDown(): void {
        this.isMouseUp = false;
    }

    mouseUp(): void {
        this.isMouseUp = true;
        // console.log('mouseup');
    }
}
