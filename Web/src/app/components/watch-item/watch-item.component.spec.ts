import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchItemComponent } from './watch-item.component';

describe('WatchItemComponent', () => {
    let component: WatchItemComponent;
    let fixture: ComponentFixture<WatchItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WatchItemComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WatchItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
