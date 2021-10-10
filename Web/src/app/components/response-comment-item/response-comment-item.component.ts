import { Component, OnInit, Input } from '@angular/core';
import { comment, responseComment } from '../../Model/comment/comment';
import { CommentService } from '../../services/comment/comment.service';
import { UsersService } from '../../services/users/users.service';
import { USER } from '../../Model/User/user';

@Component({
    selector: 'app-response-comment-item',
    templateUrl: './response-comment-item.component.html',
    styleUrls: ['./response-comment-item.component.css'],
})
export class ResponseCommentItemComponent implements OnInit {
    @Input() responseComment: responseComment = {
        id: 1,
        authorId: NaN,
        commentId: 1,
        content: 'This is a response comments',
        likes: 2,
        created: new Date(),
    };
    @Input() commentId!: number;

    // "id": 1,
    // "authorId": 4,
    // "commentId": 1,
    // "content": "This is a response comments",
    // "likes": 2,
    // "created": "2021-10-06T00:41:13.000Z"

    user: USER = {
        id: 1,
        name: 'Hoàng',
        linkImg:
            'https://yt3.ggpht.com/yti/APfAmoEID-BpDbCQ3G_0FdDDkE8dd35BCMSac5pQgnhz=s88-c-k-c0x00ffffff-no-rj-mo',
        status: 1,
        password: '123',
        created: new Date(),
    };
    isShowResponseCommentInput: boolean = false;
    color: string = '#181818';
    staticColor: string = '#909090';
    bgColor: string = '#181818';
    totalLike: number = 0;
    isLike: boolean = false;
    isUnlike: boolean = false;

    constructor(
        private commentService: CommentService,
        private usersService: UsersService,
    ) {}

    ngOnInit(): void {
        this.usersService
            .getUserByID(this.responseComment.authorId)
            .subscribe((user) => {
                this.user = user;
            });
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
}
