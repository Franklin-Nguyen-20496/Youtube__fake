import { Component, OnInit } from '@angular/core';
import { VIDEO, LinkWithVideo, LINK } from '../../Model/video/video';
import { VideosService } from '../../services/videos/videos.service';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-videos',
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
    videos!: Observable<VIDEO[]>;
    selectID: number = 0;
    // videos$!: Observable<VIDEO[]>;
    constructor(
        private VideosService: VideosService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit(): void {
        // this.VideosService.getVideos().subscribe((videos) => {
        //   this.videos = videos;
        // })
        this.videos = this.route.paramMap.pipe(
            switchMap((params) => {
                return this.VideosService.getVideos();
            }),
        );
    }
}
