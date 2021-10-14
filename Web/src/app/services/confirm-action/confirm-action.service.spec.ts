import { TestBed } from '@angular/core/testing';

import { ConfirmActionService } from './confirm-action.service';

describe('ConfirmActionService', () => {
  let service: ConfirmActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
