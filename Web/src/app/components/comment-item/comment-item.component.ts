import { Component, OnInit, Input } from '@angular/core';
import { comment, responseComment } from '../../Model/comment/comment';
import { CommentService } from '../../services/comment/comment.service';
import { UsersService } from '../../services/users/users.service';
import { AuthorService } from '../../services/auth/author.service';
import { NotifyService } from '../../services/notify/notify.service';
import { UiService } from '../../services/ui/ui.service';
import { LocalStorageHelper } from '../../shared/local-storage-helper';
import { USER } from '../../Model/User/user';
import * as $ from 'jquery';

@Component({
    selector: 'app-comment-item',
    templateUrl: './comment-item.component.html',
    styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent implements OnInit {
    @Input() comment!: comment;
    @Input() commentId!: number;
    @Input() videoId!: number;

    responseComments: responseComment[] = [];

    user: USER = {
        id: 1,
        name: 'Hoàng',
        linkImg:
            'https://yt3.ggpht.com/yti/APfAmoEID-BpDbCQ3G_0FdDDkE8dd35BCMSac5pQgnhz=s88-c-k-c0x00ffffff-no-rj-mo',
        status: 1,
    };

    isShowResponseCommentInput: boolean = false;
    isShowComment: boolean = true;
    color: string = '#181818';
    staticColor: string = '#909090';
    bgColor: string = '#181818';
    totalLike: number = 0;
    isLike: boolean = false;
    isUnlike: boolean = false;
    responseControl: string = 'Xem thêm câu trả lời';
    length: number = 0;
    isResponseComment: boolean = false;
    isShowResponseComment: boolean = false;
    isShowConfirm: boolean = false;
    isAuth: boolean = false;
    isShowSetting: boolean = false;

    constructor(
        private commentService: CommentService,
        private usersService: UsersService,
        private localStorageHelper: LocalStorageHelper,
        private notifyService: NotifyService,
        private uiService: UiService,
    ) {
        this.commentService
            .handleWhenGetResponseComment()
            .subscribe((value) => {
                if (value != undefined && this.commentId === value.commentId) {
                    this.responseComments.push(value);
                    this.isResponseComment = true;
                    this.length = this.length + 1;
                    if (this.isShowResponseComment === false) {
                        this.responseControl = `Xem thêm ${this.length} câu trả lời`;
                    } else {
                        this.responseControl = `Ẩn bớt ${this.length} câu trả lời`;
                    }
                }
            });
        // handle hide setting comment
        this.uiService.handleSettingComment().subscribe((value) => {
            this.isShowSetting = value;
        })
    }

    ngOnInit(): void {
        this.commentService
            .getResponseCommentsForComment(this.comment.id)
            .subscribe((values) => {
                this.responseComments = values;
                this.length = values.length;
                this.responseControl = `Xem thêm ${this.length} câu trả lời`;
                if (this.length === 0) {
                    this.isResponseComment = false;
                } else {
                    this.isResponseComment = true;
                }
            });

        this.usersService
            .getUserByID(this.comment.authorId)
            .subscribe((user) => {
                this.user = user;
            });

        if (this.comment.authorId === this.localStorageHelper.getUserInfo()) {
            this.isAuth = true;
        }
    }

    onMouseover() {
        this.color = '#909090';
    }

    onMouseleave() {
        this.color = '#181818';
    }

    toggleLike() {
        if (this.isLike === true) {
            this.isLike = false;
            this.totalLike = this.totalLike - 1;
        } else {
            this.isLike = true;
            this.totalLike = this.totalLike + 1;
            this.isUnlike = false;
        }
    }

    toggleUnlike() {
        if (this.isUnlike === false) {
            this.isUnlike = true;
            if (this.isLike === true) {
                this.isLike = false;
                this.totalLike = this.totalLike - 1;
            }
        } else {
            this.isUnlike = false;
        }
    }

    toggleTotalLike(): boolean {
        return this.totalLike != 0;
    }

    OnResponseComment(): void {
        // this.uiService.getShowResponseCommentInput();
        this.isShowResponseCommentInput = true;
    }

    getHideInputForm(value: boolean) {
        this.isShowResponseCommentInput = value;
    }

    toggleResponseComment() {
        if (this.isShowResponseComment === false) {
            this.isShowResponseComment = true;
            this.responseControl = `Ẩn bớt ${this.length} câu trả lời`;
        } else {
            this.isShowResponseComment = false;
            this.responseControl = `Xem thêm ${this.length} câu trả lời`;
        }
    }

    // setting comment
    confirmAction(): void {
        this.isShowConfirm = false;
        if (this.isAuth) {
            this.commentService.deleteComment(this.comment.id).subscribe((result) => {
                if (typeof (result) !== 'string') {
                    this.isShowComment = false;
                    this.notifyService.setNotify('Đã xóa bình luận !');
                }
            });
        }
        else {
            this.notifyService.setNotify('Đã gửi báo cáo!');
        }
    }

    toggleShowSetting() {
        this.isShowSetting = !this.isShowSetting;
    }

    ShowConfirm() {
        this.isShowConfirm = true;
        this.isShowSetting = false;
    }

    cancelConfirmAction() {
        this.isShowConfirm = false;
    }
}
