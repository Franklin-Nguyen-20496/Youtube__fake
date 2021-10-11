import { responseComment } from './../../Model/comment/comment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { USER } from '../../Model/User/user';
import { UiService } from '../../services/ui/ui.service';
import { CommentService } from '../../services/comment/comment.service';
import { AuthorService } from '../../services/auth/author.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-form-input-response-comment',
    templateUrl: './form-input-response-comment.component.html',
    styleUrls: ['./form-input-response-comment.component.css'],
})
export class FormInputResponseCommentComponent implements OnInit {
    @Input() user: USER = {
        id: 1,
        name: 'Hoàng',
        linkImg:
            'https://yt3.ggpht.com/yti/APfAmoEID-BpDbCQ3G_0FdDDkE8dd35BCMSac5pQgnhz=s88-c-k-c0x00ffffff-no-rj-mo',
        status: 1,
        password: '123',
        created: new Date(),
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
        private authorService: AuthorService,
    ) {
        this.authorService.handleAccount().subscribe((auth) => {
            this.user = {
                id: auth.authorId,
                name: auth.name,
                linkImg: auth.linkImg,
                status: auth.status,
                password: auth.password,
                created: auth.created,
            };
        });
    }

    ngOnInit(): void {
        this.authorService.getAccountWhenReload().subscribe((auth) => {
            this.user = {
                id: auth.authorId,
                name: auth.name,
                linkImg: auth.linkImg,
                status: auth.status,
                password: auth.password,
                created: auth.created,
            };
        });
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
                });

            this.content = '';
            this.canSubmit = false;
            this.isShowResponseCommentInput = false;
            this.click.emit(this.isShowResponseCommentInput);
        }
    }
}
