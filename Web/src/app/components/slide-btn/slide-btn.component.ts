import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-slide-btn',
    templateUrl: './slide-btn.component.html',
    styleUrls: ['./slide-btn.component.css'],
})
export class SlideBtnComponent implements OnInit {
    @Input() name: string = 'example name';
    @Input() color: string = '#fff';
    @Input() bgColor: string = '#373737';
    minLeft: boolean = false;
    minRight: boolean = true;
    btnLeft: number = 0;
    btnRight: number = 5;

    constructor() {}

    ngOnInit(): void {}

    onclickLeft() {
        this.btnLeft = this.btnLeft - 1;
        this.btnRight = this.btnRight + 1;

        if (this.btnLeft === 0) {
            this.minLeft = false;
        } else {
            this.minLeft = true;
        }

        if (this.btnRight === 0) {
            this.minRight = false;
        } else {
            this.minRight = true;
        }

        console.log('btnLeft', this.btnLeft);
        console.log('btnRight', this.btnRight);
    }

    onclickRight() {
        this.btnLeft = this.btnLeft + 1;
        this.btnRight = this.btnRight - 1;

        if (this.btnLeft === 0) {
            this.minLeft = false;
        } else {
            this.minLeft = true;
        }

        if (this.btnRight === 0) {
            this.minRight = false;
        } else {
            this.minRight = true;
        }

        console.log('btnLeft', this.btnLeft);
        console.log('btnRight', this.btnRight);
    }
}
