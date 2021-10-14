import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-action',
  templateUrl: './confirm-action.component.html',
  styleUrls: ['./confirm-action.component.css']
})
export class ConfirmActionComponent implements OnInit {

  @Output() click: EventEmitter<any> = new EventEmitter();
  @Output() cancelClick: EventEmitter<any> = new EventEmitter();
  @Input() isAuth!: boolean;
  textHeader: string = 'Báo bình luận vi phạm';
  textCancel: string = 'Hủy';
  textConfirm: string = 'OK';


  constructor() { }

  ngOnInit(): void {
  }

  CancelClick() {
    this.cancelClick.emit()
  }

  confirmClick() {
    this.click.emit(this.isAuth);
  }
}
