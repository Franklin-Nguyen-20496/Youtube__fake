
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { USER } from '../../Model/User/user';
import { UiService } from '../../services/ui/ui.service';
import { CommentService } from '../../services/comment/comment.service';
import { NotifyService } from '../../services/notify/notify.service';
import { LocalStorageHelper } from '../../shared/local-storage-helper';
import { UsersService } from '../../services/users/users.service';

@Component({
    selector: 'app-small-form-input',
    templateUrl: './small-form-input.component.html',
    styleUrls: ['./small-form-input.component.css'],
})
export class SmallFormInputComponent implements OnInit {
    @Input() user: USER = {
        id: 1,
        name: 'Hoàng',
        linkImg:
            'https://yt3.ggpht.com/yti/APfAmoEID-BpDbCQ3G_0FdDDkE8dd35BCMSac5pQgnhz=s88-c-k-c0x00ffffff-no-rj-mo',
        status: 1,
    };
    @Input() commentId!: number;
    @Input() videoId!: number;
    @Input() bgColor: string = '#181818';
    @Input() imgSize: string = '24px';

    @Output() click: EventEmitter<boolean> = new EventEmitter();

    content!: string;
    responseComment!: Object;
    canSubmit: boolean = false;
    isShowResponseCommentInput: boolean = true;

    constructor(
        private uiService: UiService,
        private commentService: CommentService,
        private usersService: UsersService,
        private notifyService: NotifyService,
        private localStorageHelper: LocalStorageHelper,
    ) {
        this.localStorageHelper.handleUserInfoWhenLogin().subscribe((id) => {
            this.usersService.getUserByID(id).subscribe((user) => {
                this.user = user;
            })
        })
    }

    ngOnInit(): void {
        const authId = this.localStorageHelper.getUserInfo();
        this.usersService.getUserByID(authId).subscribe((user) => {
            this.user = user;
        })
    }

    Onchange() {
        if (this.content == '') {
            this.canSubmit = false;
        } else {
            this.canSubmit = true;
        }
    }

    cancelComment() {
        this.content = '';
        this.isShowResponseCommentInput = false;
        this.click.emit(this.isShowResponseCommentInput);
    }

    Onfocus() {
        this.isShowResponseCommentInput = true;
    }

    OnSubmit() {
        if (this.content != null) {
            this.responseComment = {
                videoId: this.videoId,
                authorId: this.user.id,
                commentId: this.commentId,
                content: this.content,
                likes: 0,
                created: new Date(),
            };

            this.commentService
                .createResponseComment(this.responseComment)
                .subscribe((value) => {
                    this.commentService.getResponseComment(value);
                    this.notifyService.setNotify('Đã lưu bình luận!');
                });

            this.content = '';
            this.canSubmit = false;
            this.isShowResponseCommentInput = false;
            this.click.emit(this.isShowResponseCommentInput);
        }
    }
}
