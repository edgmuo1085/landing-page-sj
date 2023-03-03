import { TestBed } from '@angular/core/testing';

import { ToastCustomService } from './toast-custom.service';

describe('ToastCustomService', () => {
  let service: ToastCustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastCustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
