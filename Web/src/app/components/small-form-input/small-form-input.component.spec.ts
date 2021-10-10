import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallFormInputComponent } from './small-form-input.component';

describe('SmallFormInputComponent', () => {
    let component: SmallFormInputComponent;
    let fixture: ComponentFixture<SmallFormInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SmallFormInputComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SmallFormInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
