import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomsListComponent } from './user-customs-list.component';

describe('UserCustomsListComponent', () => {
    let component: UserCustomsListComponent;
    let fixture: ComponentFixture<UserCustomsListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserCustomsListComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserCustomsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
