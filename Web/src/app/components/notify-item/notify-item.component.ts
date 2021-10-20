import { Component, Input, OnInit } from '@angular/core';
import { USER } from '../../Model/User/user';
import { UsersService } from '../../services/users/users.service';
import { VIDEO, LinkWithVideo, LINK } from '../../Model/video/video';

@Component({
    selector: 'app-notify-item',
    templateUrl: './notify-item.component.html',
    styleUrls: ['./notify-item.component.css'],
})
export class NotifyItemComponent implements OnInit {
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

    user: USER = {
        id: 1,
        name: 'Hoàng',
        linkImg:
            'https://yt3.ggpht.com/yti/APfAmoEID-BpDbCQ3G_0FdDDkE8dd35BCMSac5pQgnhz=s88-c-k-c0x00ffffff-no-rj-mo',
        status: 1,
    };

    constructor(private UsersService: UsersService) { }

    ngOnInit(): void {
        this.UsersService.getUserByID(this.video.authorId).subscribe((user) => {
            // console.log(user)
            this.user = user;
        });

        this.video.videoLink = `https://i.ytimg.com/vi/${this.video.videoLink}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA3yILl-Xyb4kgGjY4DNis-iVmPoQ`;
    }

    buttonClick() {
        // console.log('button click');
    }
}
