import { Component, OnInit } from '@angular/core';
import { VIDEO } from '../../../Model/video/video';
import { VideosService } from '../../../services/videos/videos.service';
import { AuthorService } from '../../../services/auth/author.service';

@Component({
    selector: 'app-user-customs-list',
    templateUrl: './user-customs-list.component.html',
    styleUrls: ['./user-customs-list.component.css'],
})
export class UserCustomsListComponent implements OnInit {
    videos!: VIDEO[];
    authorId!: number;
    color: string = '#181818';

    constructor(
        private authorService: AuthorService,
        private videosService: VideosService,
    ) {

    }

    ngOnInit(): void {
        this.authorService.getAccountWhenReload().subscribe((data) => {

            this.videosService.getVideosByUser(this.authorId).subscribe((videos) => {
                this.videos = videos;
            })
        })

    }

    onMouseover() {
        this.color = '#fff';
    }

    onMouseleave() {
        this.color = '#181818';
    }
}
