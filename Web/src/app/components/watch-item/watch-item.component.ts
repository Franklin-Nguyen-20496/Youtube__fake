import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { VIDEO, LinkWithVideo, LINK } from '../../Model/video/video';
import { USER } from '../../Model/User/user';
import { UsersService } from '../../services/users/users.service';

@Component({
    selector: 'app-watch-item',
    templateUrl: './watch-item.component.html',
    styleUrls: ['./watch-item.component.css'],
})
export class WatchItemComponent implements OnInit {
    @Input() video: VIDEO = {
        id: 1,
        authorId: 1,
        videoLink:
            'https://i.ytimg.com/vi/KGTVU9AUxI0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDJM1n3Agw8F1bxSGLMUQYXzKCX1Q',
        img: 'https://i.ytimg.com/vi/oigiXW6XyCQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuYO5MWrlVSdI3uEWaqkxN81Ptdw',
        name: 'name video',
        description: 'description this video',
        views: 1545462,
        likes: 9542,
        dislikes: 11,
        created: new Date(),
    };

    user$!: Observable<USER>;
    color: string = '#181818';

    constructor(private UsersService: UsersService) {}

    ngOnInit(): void {
        this.user$ = this.UsersService.getUserByID(this.video.authorId);
    }

    onMouseover() {
        this.color = '#fff';
    }

    onMouseleave() {
        this.color = '#181818';
    }
}
