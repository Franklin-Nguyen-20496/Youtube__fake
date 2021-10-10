import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputCommentComponent } from './form-input-comment.component';

describe('FormInputCommentComponent', () => {
    let component: FormInputCommentComponent;
    let fixture: ComponentFixture<FormInputCommentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormInputCommentComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormInputCommentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
