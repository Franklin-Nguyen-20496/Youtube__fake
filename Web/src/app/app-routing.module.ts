import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './components/videos/videos.component';
import { WatchVideoComponent } from './page/watch-video/watch-video.component';
import { LoggingComponent } from './page/logging/logging.component';
import { UserCreateComponent } from './page/user-create/user-create.component';

const routes: Routes = [
    { path: '', component: VideosComponent },
    { path: 'watch/:id', component: WatchVideoComponent },
    { path: 'logging', component: LoggingComponent },
    { path: 'user', component: UserCreateComponent },
    {
        path: 'videos',
        loadChildren: () =>
            import('./page/user-customs/user-customs.module').then(
                (m) => m.UserCustomsModule,
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
