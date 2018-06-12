import { TestBed, inject } from '@angular/core/testing';

import { Iwe7AccountService } from './iwe7-account.service';

describe('Iwe7AccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Iwe7AccountService]
    });
  });

  it('should be created', inject([Iwe7AccountService], (service: Iwe7AccountService) => {
    expect(service).toBeTruthy();
  }));
});
