import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserCustomsComponent } from './user-customs.component';
import { UserCustomsListComponent } from './user-customs-list/user-customs-list.component';
import { UserCustomsCreateComponent } from './user-customs-create/user-customs-create.component';

const routes: Routes = [
    {
        path: '',
        component: UserCustomsComponent,
        children: [
            {
                path: '',
                component: UserCustomsListComponent,
            },
            {
                path: 'create',
                component: UserCustomsCreateComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserCustomsRoutingModule {}
