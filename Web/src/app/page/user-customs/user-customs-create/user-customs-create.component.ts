import { Component, OnInit } from '@angular/core';
import { VIDEO } from '../../../Model/video/video';
import { VideosService } from '../../../services/videos/videos.service';
import { NotifyService } from '../../../services/notify/notify.service';
import { LocalStorageHelper } from '../../../shared/local-storage-helper';
import { UsersService } from '../../../services/users/users.service';

@Component({
    selector: 'app-user-customs-create',
    templateUrl: './user-customs-create.component.html',
    styleUrls: ['./user-customs-create.component.css'],
})
export class UserCustomsCreateComponent implements OnInit {
    video: VIDEO = {
        id: 1,
        authorId: 1,
        videoLink: '',
        img: '',
        name: '',
        description: '',
        views: 1545462,
        likes: 9542,
        dislikes: 11,
        created: new Date(),
    };

    authorId!: number;

    constructor(
        private videosService: VideosService,
        private usersService: UsersService,
        private localStorageHelper: LocalStorageHelper,
        private notifyService: NotifyService,
    ) {
        this.localStorageHelper.handleUserInfoWhenLogin().subscribe((id) => {
            this.authorId = id;
        })
    }

    ngOnInit(): void {
        this.authorId = this.localStorageHelper.getUserInfo();
    }

    onSubmit() {
        if (this.video.videoLink != null && this.video.name != null && this.video.img != null) {
            const video = {
                authorId: this.authorId,
                videoLink: this.video.videoLink,
                img: this.video.img,
                name: this.video.name,
                description: this.video.description,
                views: 1545462,
                likes: 9542,
                dislikes: 11,
            }
            console.log(this.authorId);

            this.videosService.createVideo(video).subscribe((data) => {
                if (typeof (data) === 'string') {
                    console.log('False to make video');
                    this.notifyService.setNotify('Có lỗi khi tạo video!')
                }
                else {
                    console.log('Video created');
                    this.notifyService.setNotify('Đã lưu video của bạn!!')
                }

                this.video.videoLink = '';
                this.video.img = '';
                this.video.name = '';
                this.video.description = '';
            })
        }
    }
}
