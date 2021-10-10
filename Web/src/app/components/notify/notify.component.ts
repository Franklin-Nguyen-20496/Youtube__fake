import { Component, OnInit } from '@angular/core';
import { USER } from '../../Model/User/user';
import { UsersService } from '../../services/users/users.service';
import { VIDEO, LinkWithVideo, LINK } from '../../Model/video/video';
import { VideosService } from '../../services/videos/videos.service';

@Component({
    selector: 'app-notify',
    templateUrl: './notify.component.html',
    styleUrls: ['./notify.component.css'],
})
export class NotifyComponent implements OnInit {
    videos: VIDEO[] = [];

    constructor(private VideosService: VideosService) {}

    ngOnInit(): void {
        this.VideosService.getVideos().subscribe((data: VIDEO[]) => {
            this.videos = data;
        });
    }

    videoClick() {}

    btnClick() {}
}
