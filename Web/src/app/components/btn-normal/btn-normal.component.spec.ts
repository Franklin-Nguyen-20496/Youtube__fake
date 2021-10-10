import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnNormalComponent } from './btn-normal.component';

describe('BtnNormalComponent', () => {
    let component: BtnNormalComponent;
    let fixture: ComponentFixture<BtnNormalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BtnNormalComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BtnNormalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
