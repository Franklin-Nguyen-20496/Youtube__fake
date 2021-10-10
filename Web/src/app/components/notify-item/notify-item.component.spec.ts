import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyItemComponent } from './notify-item.component';

describe('NotifyItemComponent', () => {
    let component: NotifyItemComponent;
    let fixture: ComponentFixture<NotifyItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NotifyItemComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NotifyItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
