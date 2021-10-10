import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseCommentItemComponent } from './response-comment-item.component';

describe('ResponseCommentItemComponent', () => {
    let component: ResponseCommentItemComponent;
    let fixture: ComponentFixture<ResponseCommentItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ResponseCommentItemComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ResponseCommentItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
