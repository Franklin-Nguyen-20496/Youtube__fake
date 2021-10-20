import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VIDEO, LinkWithVideo, LINK } from '../../Model/video/video';
import { VideosService } from '../../services/videos/videos.service';
import { USER } from '../../Model/User/user';
import { UsersService } from '../../services/users/users.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
    selector: 'app-watch-video',
    templateUrl: './watch-video.component.html',
    styleUrls: ['./watch-video.component.css'],
})
export class WatchVideoComponent implements OnInit {
    video$!: Observable<VIDEO>;
    user: USER = {
        id: 1,
        name: 'Hoàng',
        linkImg:
            'https://yt3.ggpht.com/yti/APfAmoEID-BpDbCQ3G_0FdDDkE8dd35BCMSac5pQgnhz=s88-c-k-c0x00ffffff-no-rj-mo',
        status: 1,
    };

    videoLink!: string;
    videos$!: Observable<VIDEO[]>;
    videoDescription!: string;
    widthLike: string = '95%';
    widthUnlike: string = '5%';
    isLike: boolean = false;
    isUnlike: boolean = false;
    isSubscribe: boolean = false;
    isHide: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private videosService: VideosService,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        const myPromise = new Promise((resolve, reject) => {
            resolve(
                (this.video$ = this.route.paramMap.pipe(
                    switchMap((params: ParamMap) =>
                        this.videosService.getVideoByID(params.get('id')!),
                    ),
                )),
            );
        });

        myPromise.then(() => {
            this.video$.subscribe((video) => {
                this.usersService
                    .getUserByID(video.authorId)
                    .subscribe((user) => {
                        this.user = user;
                    });
            });

            this.video$.forEach((video) => {
                this.videoLink = `https://www.youtube.com/embed/${video.videoLink}`;
                // console.log($('.video__wrapper >iframe'));
                $('document').ready(() => {
                    $('.video__wrapper >iframe').attr(
                        'src',
                        `https://www.youtube.com/embed/${video.videoLink}`,
                    );
                });
            });
        });

        this.videos$ = this.videosService.getVideos();
    }

    toggleLike() {
        this.isLike = !this.isLike;
        if (this.isLike) this.isUnlike = false;
    }

    toggleUnlike() {
        this.isUnlike = !this.isUnlike;
        if (this.isUnlike) this.isLike = false;
    }

    toggleSubscribe() {
        this.isSubscribe = !this.isSubscribe;
    }

    toggleHide() {
        this.isHide = !this.isHide;
    }
}
