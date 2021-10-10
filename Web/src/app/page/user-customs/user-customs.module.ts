import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserCustomsRoutingModule } from './user-customs-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserCustomsListComponent } from './user-customs-list/user-customs-list.component';
import { UserCustomsCreateComponent } from './user-customs-create/user-customs-create.component';

@NgModule({
    declarations: [
        UserCustomsListComponent, UserCustomsCreateComponent,
    ],

    imports: [CommonModule, HttpClientModule, FormsModule, UserCustomsRoutingModule,],
})
export class UserCustomsModule { }
