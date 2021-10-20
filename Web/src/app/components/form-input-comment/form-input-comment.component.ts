import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { USER } from '../../Model/User/user';
import { comment, responseComment } from '../../Model/comment/comment';
import { CommentService } from '../../services/comment/comment.service';
import { AuthorService } from '../../services/auth/author.service';
import { NotifyService } from '../../services/notify/notify.service';
import { LocalStorageHelper } from '../../shared/local-storage-helper';
import { UsersService } from '../../services/users/users.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-form-input-comment',
    templateUrl: './form-input-comment.component.html',
    styleUrls: ['./form-input-comment.component.css'],
})
export class FormInputCommentComponent implements OnInit {
    @Output() click: EventEmitter<comment> = new EventEmitter();
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
    @Input() imgSize: string = '40px';

    content!: string;
    comment!: Object;
    canSubmit: boolean = false;
    isFocusInput: boolean = false;

    constructor(
        private commentService: CommentService,
        private localStorageHelper: LocalStorageHelper,
        private notifyService: NotifyService,
        private usersService: UsersService,
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
        this.isFocusInput = false;
    }

    Onfocus() {
        this.isFocusInput = true;
    }

    OnSubmit() {
        if (this.content != null) {
            this.comment = {
                authorId: this.user.id,
                videoId: this.videoId,
                content: this.content,
                likes: 0,
                totalResponse: 0,
                created: new Date(),
            };
            this.commentService
                .createComment(this.comment)
                .subscribe((value) => {
                    this.click.emit(value);
                    this.notifyService.setNotify('Đã lưu bình luận!');
                });
            this.content = '';
            this.canSubmit = false;
            this.isFocusInput = false;
        }
    }
}
