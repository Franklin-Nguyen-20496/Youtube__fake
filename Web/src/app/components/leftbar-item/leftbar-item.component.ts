import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-leftbar-item',
    templateUrl: './leftbar-item.component.html',
    styleUrls: ['./leftbar-item.component.css'],
})
export class leftBarItemComponent implements OnInit {
    @Input() icon: string = 'fas fa-home';
    @Input() title: string = 'Trang chủ';
    @Input() color: string = '#909090';
    @Output() click: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    onclick() {
        this.click.emit();
    }
}
