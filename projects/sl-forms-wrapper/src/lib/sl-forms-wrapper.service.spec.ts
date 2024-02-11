import { TestBed } from '@angular/core/testing';

import { SlFormsWrapperService } from './sl-forms-wrapper.service';

describe('SlFormsWrapperService', () => {
  let service: SlFormsWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlFormsWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
