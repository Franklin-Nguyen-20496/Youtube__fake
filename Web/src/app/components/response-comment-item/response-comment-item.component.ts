import { Component, OnInit, Input } from '@angular/core';
import { comment, responseComment } from '../../Model/comment/comment';
import { CommentService } from '../../services/comment/comment.service';
import { UsersService } from '../../services/users/users.service';
import { USER } from '../../Model/User/user';
import { NotifyService } from '../../services/notify/notify.service';
import { UiService } from '../../services/ui/ui.service';
import { AuthorService } from '../../services/auth/author.service';
import { LocalStorageHelper } from '../../shared/local-storage-helper';

@Component({
    selector: 'app-response-comment-item',
    templateUrl: './response-comment-item.component.html',
    styleUrls: ['./response-comment-item.component.css'],
})
export class ResponseCommentItemComponent implements OnInit {
    @Input() responseComment: responseComment = {
        id: 1,
        videoId: NaN,
        authorId: NaN,
        commentId: 1,
        content: 'This is a response comments',
        likes: 2,
        created: new Date(),
    };
    @Input() commentId!: number;
    @Input() videoId!: number;

    user: USER = {
        id: 1,
        name: 'Hoàng',
        linkImg:
            'https://yt3.ggpht.com/yti/APfAmoEID-BpDbCQ3G_0FdDDkE8dd35BCMSac5pQgnhz=s88-c-k-c0x00ffffff-no-rj-mo',
        status: 1,
    };
    isShowResponseCommentInput: boolean = false;
    color: string = '#181818';
    staticColor: string = '#909090';
    bgColor: string = '#181818';
    totalLike: number = 0;
    isLike: boolean = false;
    isUnlike: boolean = false;
    isShowConfirm: boolean = false;
    isAuth: boolean = false;
    isShowSetting: boolean = false;
    isShowResponseComment: boolean = true;

    constructor(
        private commentService: CommentService,
        private usersService: UsersService,
        private localStorageHelper: LocalStorageHelper,
        private notifyService: NotifyService,
        private uiService: UiService,
    ) { }

    ngOnInit(): void {
        this.usersService
            .getUserByID(this.responseComment.authorId)
            .subscribe((user) => {
                this.user = user;
            });
        // handle hide setting comment
        this.uiService.handleSettingComment().subscribe((value) => {
            this.isShowSetting = value;
        })

        if (this.responseComment.authorId === this.localStorageHelper.getUserInfo()) {
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

    // setting comment
    confirmAction(): void {
        this.isShowConfirm = false;
        if (this.isAuth === true) {
            this.commentService.deleteResponseComment(this.responseComment.id).subscribe((result) => {
                if (typeof (result) !== 'string') {
                    this.isShowResponseComment = false;
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
