import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomsCreateComponent } from './user-customs-create.component';

describe('UserCustomsCreateComponent', () => {
    let component: UserCustomsCreateComponent;
    let fixture: ComponentFixture<UserCustomsCreateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserCustomsCreateComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserCustomsCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
