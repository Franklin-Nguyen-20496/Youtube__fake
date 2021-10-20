import { Component, OnInit, Input } from '@angular/core';
import { VIDEO, LinkWithVideo, LINK } from '../../Model/video/video';
import { VideosService } from '../../services/videos/videos.service';
import { USER } from '../../Model/User/user';
import { UsersService } from '../../services/users/users.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-video-item',
    templateUrl: './video-item.component.html',
    styleUrls: ['./video-item.component.css'],
})
export class VideoItemComponent implements OnInit {
    @Input() video: VIDEO = {
        id: 1,
        authorId: 1,
        videoLink: 'KGTVU9AUxI0',
        img: 'https://i.ytimg.com/vi/oigiXW6XyCQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuYO5MWrlVSdI3uEWaqkxN81Ptdw',
        name: 'name video',
        description: 'description this video',
        views: 1545462,
        likes: 9542,
        dislikes: 11,
        created: new Date(),
    };

    user: USER = {
        id: 1,
        name: 'Hoàng',
        linkImg:
            'https://yt3.ggpht.com/yti/APfAmoEID-BpDbCQ3G_0FdDDkE8dd35BCMSac5pQgnhz=s88-c-k-c0x00ffffff-no-rj-mo',
        status: 1,
    };

    subscribe: number = 0;
    color: string = '#181818';
    notDeleted: boolean = true;

    constructor(
        private videosService: VideosService,
        private usersService: UsersService,
        private route: Router,
    ) { }

    ngOnInit(): void {
        this.usersService.getUserByID(this.video.authorId).subscribe((user) => {
            this.user = user;
            // this.subscribe = this.user.subscribeID.length;
        });

        // this.color = '#181818';
    }

    onMouseover() {
        this.color = '#fff';
    }

    onMouseleave() {
        this.color = '#181818';
    }

    hasRoute(route: string): boolean {
        return this.route.url === route;
    }

    deleteVideo() {
        // this.videosService.deleteVideo(this.video.id).subscribe((value) => {
        //     this.notDeleted = false;
        // });
    }

    watchVideo() {
        this.route.navigate(['/watch', this.video.id])
    }
}
