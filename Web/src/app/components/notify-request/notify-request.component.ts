import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../../services/notify/notify.service';

@Component({
    selector: 'app-notify-request',
    templateUrl: './notify-request.component.html',
    styleUrls: ['./notify-request.component.css'],
})
export class NotifyRequestComponent implements OnInit {
    notifyContent: string = 'Bạn đang dùng Youtube fake!';

    isShowNotify: boolean = false;

    constructor(private notifyService: NotifyService) {
        this.notifyService.handleNotify().subscribe((content) => {
            this.notifyContent = content;
            this.isShowNotify = true;
            setTimeout(() => {
                this.isShowNotify = false;
            }, 4000);
        });
    }

    ngOnInit(): void {}
}
