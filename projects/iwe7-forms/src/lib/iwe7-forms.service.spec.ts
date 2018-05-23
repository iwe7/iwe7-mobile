import { TestBed, inject } from '@angular/core/testing';

import { Iwe7FormsService } from './iwe7-forms.service';

describe('Iwe7FormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Iwe7FormsService]
    });
  });

  it('should be created', inject([Iwe7FormsService], (service: Iwe7FormsService) => {
    expect(service).toBeTruthy();
  }));
});
