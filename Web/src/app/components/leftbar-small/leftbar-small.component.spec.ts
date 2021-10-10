import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbarSmallComponent } from './leftbar-small.component';

describe('LeftbarSmallComponent', () => {
    let component: LeftbarSmallComponent;
    let fixture: ComponentFixture<LeftbarSmallComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LeftbarSmallComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LeftbarSmallComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
