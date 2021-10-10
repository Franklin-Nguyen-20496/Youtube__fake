import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyRequestComponent } from './notify-request.component';

describe('NotifyRequestComponent', () => {
    let component: NotifyRequestComponent;
    let fixture: ComponentFixture<NotifyRequestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NotifyRequestComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NotifyRequestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
