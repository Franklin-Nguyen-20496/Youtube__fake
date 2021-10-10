import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// import { relative } from 'path';

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.css'],
})
export class SlideComponent implements OnInit {
    $value: number = 0;
    maxValue!: number;
    windowWidth?: number;
    elementWidth?: number;
    totalValue!: number;
    isClickLeftBtn: boolean = false;
    isClickRightBtn: boolean = true;
    isMousedown: boolean = false;
    isMouseout: boolean = true;
    isMouseup: boolean = false;
    defaultPoint!: number;
    relativePoint!: number;
    mousePoint!: number;

    constructor() {}

    ngOnInit(): void {
        const myPromise = new Promise((resolve, reject) => {
            $('document').ready(() => {
                this.elementWidth = $('.slide__tranform').outerWidth(true);
                resolve($('#slide').outerWidth(true));
            });
        });

        myPromise
            .then((windowWidth) => {
                console.log(Number(this.elementWidth));
                console.log(Number(windowWidth));
                this.maxValue = Number(this.elementWidth) - Number(windowWidth);
                this.totalValue = this.maxValue;
                // console.log('totalValue',this.totalValue);
                // console.log('maxValue',this.maxValue);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    handleRightBtn() {
        if (this.maxValue > 320) {
            this.$value = this.$value - 320;
            this.maxValue = this.maxValue - 320;
            this.isClickLeftBtn = true;
            // console.log('value', this.$value);
            // console.log('maxValue', this.maxValue);
        } else {
            this.$value = this.$value - this.maxValue;
            this.maxValue = 0;
            this.isClickLeftBtn = true;
            this.isClickRightBtn = false;
            // console.log('value', this.$value);
            // console.log('maxValue', this.maxValue);
        }
    }

    handleLeftBtn() {
        if (this.totalValue - this.maxValue > 320) {
            this.$value = this.$value + 320;
            this.maxValue = this.maxValue + 320;
            this.isClickRightBtn = true;
            // console.log('value', this.$value);
            // console.log('maxValue', this.maxValue);
        } else {
            this.$value = this.$value + (this.totalValue - this.maxValue);
            this.maxValue = this.totalValue;
            this.isClickLeftBtn = false;
            this.isClickRightBtn = true;
            // console.log('value', this.$value);
            // console.log('maxValue', this.maxValue);
        }
    }

    onResize(event: any) {}

    // slideOnMouseDown(event: any) {
    //     this.isMousedown = true;
    //     this.defaultPoint = event.pageX;
    //     this.mousePoint = this.relativePoint - this.defaultPoint;
    //     console.log('mousedown');
    // }

    // slideOnMouseMove(event: any) {
    //     if(this.isMousedown === true) {
    //         this.relativePoint = event.pageX;
    //         this.mousePoint = this.relativePoint - this.defaultPoint;
    //         this.$value = this.$value = this.mousePoint;
    //     }
    //     else {
    //         this.mousePoint = 0;
    //     }
    // }

    // slideOnMouseOut(event: any) {
    //     this.isMousedown = false;
    //     this.mousePoint = 0;
    //     console.log('mouseout');
    // }

    // slideOnMouseUp(event: any) {
    //     this.isMousedown = false;
    //     this.mousePoint = 0;
    //     console.log('mouseup');
    // }
}
