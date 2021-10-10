import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputResponseCommentComponent } from './form-input-response-comment.component';

describe('FormInputResponseCommentComponent', () => {
    let component: FormInputResponseCommentComponent;
    let fixture: ComponentFixture<FormInputResponseCommentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormInputResponseCommentComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormInputResponseCommentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
