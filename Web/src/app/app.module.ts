import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BtnIconComponent } from './components/btn-icon/btn-icon.component';
import { BtnNormalComponent } from './components/btn-normal/btn-normal.component';
import { InputComponent } from './components/input/input.component';
import { SelectItemComponent } from './components/select-item/select-item.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { NotifyComponent } from './components/notify/notify.component';
import { NotifyItemComponent } from './components/notify-item/notify-item.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UserBtnComponent } from './components/user-btn/user-btn.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideBtnComponent } from './components/slide-btn/slide-btn.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { leftBarItemComponent } from './components/leftbar-item/leftbar-item.component';
import { leftBarSmallComponent } from './components/leftbar-small/leftbar-small.component';
import { WatchVideoComponent } from './page/watch-video/watch-video.component';
import { WatchItemComponent } from './components/watch-item/watch-item.component';
import { CommentComponent } from './components/comment/comment.component';
import { FormInputCommentComponent } from './components/form-input-comment/form-input-comment.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { BtnIconSmallComponent } from './components/btn-icon-small/btn-icon-small.component';
import { FormInputResponseCommentComponent } from './components/form-input-response-comment/form-input-response-comment.component';
import { ResponseCommentItemComponent } from './components/response-comment-item/response-comment-item.component';
import { SlideComponent } from './components/slide/slide.component';
import { UserCustomsComponent } from './page/user-customs/user-customs.component';
import { SmallFormInputComponent } from './components/small-form-input/small-form-input.component';
import { UserCustomsModule } from './page/user-customs/user-customs.module';
import { LoggingComponent } from './page/logging/logging.component';
import { UserCreateComponent } from './page/user-create/user-create.component';
import { NotifyRequestComponent } from './components/notify-request/notify-request.component';
import { ConfirmActionComponent } from './components/confirm-action/confirm-action.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BtnIconComponent,
        BtnNormalComponent,
        InputComponent,
        SelectItemComponent,
        LeftBarComponent,
        UserItemComponent,
        NotifyComponent,
        NotifyItemComponent,
        UserMenuComponent,
        UserBtnComponent,
        NavbarComponent,
        SlideBtnComponent,
        VideosComponent,
        VideoItemComponent,
        leftBarItemComponent,
        leftBarSmallComponent,
        WatchVideoComponent,
        WatchItemComponent,
        CommentComponent,
        FormInputCommentComponent,
        CommentItemComponent,
        BtnIconSmallComponent,
        FormInputResponseCommentComponent,
        ResponseCommentItemComponent,
        SlideComponent,
        UserCustomsComponent,
        SmallFormInputComponent,
        LoggingComponent,
        UserCreateComponent,
        NotifyRequestComponent,
        ConfirmActionComponent,
    ],

    // use HttpClientModule after BrowserModule
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FontAwesomeModule,
        NgbModule,
        FormsModule,
        UserCustomsModule,
        SharedModule,
    ],

    // enableTracing: true help you debug routing
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
