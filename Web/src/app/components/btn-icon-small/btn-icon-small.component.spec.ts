import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnIconSmallComponent } from './btn-icon-small.component';

describe('BtnIconSmallComponent', () => {
    let component: BtnIconSmallComponent;
    let fixture: ComponentFixture<BtnIconSmallComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BtnIconSmallComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BtnIconSmallComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
