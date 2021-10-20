import { Component, OnInit, Input } from '@angular/core';
import { USER } from '../../Model/User/user';
import { CommentService } from '../../services/comment/comment.service';
import { comment, responseComment } from '../../Model/comment/comment';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
    @Input() videoId!: number;
    @Input() commentId!: number;
    comments!: comment[];
    totalComments: string = '';
    user: USER = {
        id: 1,
        name: 'Hoàng',
        linkImg:
            'https://yt3.ggpht.com/yti/APfAmoEID-BpDbCQ3G_0FdDDkE8dd35BCMSac5pQgnhz=s88-c-k-c0x00ffffff-no-rj-mo',
        status: 1,
    };

    constructor(private commentService: CommentService) { }

    ngOnInit(): void {
        this.commentService
            .getCommentsForVideo(this.videoId)
            .subscribe((comments) => {
                this.comments = comments;
                this.totalComments = `${comments.length} bình luận`;
            });
    }

    onSubmitComment(comment: comment) {
        console.log('comment', comment);
        this.comments.push(comment);
    }
}
