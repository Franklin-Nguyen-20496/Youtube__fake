import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-btn-normal',
    templateUrl: './btn-normal.component.html',
    styleUrls: ['./btn-normal.component.css'],
})
export class BtnNormalComponent implements OnInit {
    @Input() name: string = 'button';
    @Input() color: string = '#fff';
    @Input() bgColor: string = '#cc0000';
    @Input() class: string = 'btn_normal enabled';
    @Input() type: string = 'button';
    @Output() click: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    btnClick() {
        this.click.emit();
    }
}
