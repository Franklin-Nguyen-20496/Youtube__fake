import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbarItemComponent } from './leftbar-item.component';

describe('LeftbarItemComponent', () => {
    let component: LeftbarItemComponent;
    let fixture: ComponentFixture<LeftbarItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LeftbarItemComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LeftbarItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
