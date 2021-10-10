import { TestBed } from '@angular/core/testing';

import { ButtonIconService } from './button-icon.service';

describe('ButtonIconService', () => {
    let service: ButtonIconService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ButtonIconService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
