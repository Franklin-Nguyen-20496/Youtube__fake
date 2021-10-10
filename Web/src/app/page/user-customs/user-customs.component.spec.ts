import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomsComponent } from './user-customs.component';

describe('UserCustomsComponent', () => {
    let component: UserCustomsComponent;
    let fixture: ComponentFixture<UserCustomsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserCustomsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserCustomsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
