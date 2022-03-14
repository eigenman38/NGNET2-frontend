import { TestBed } from '@angular/core/testing';

import { ApiCallLogFacadeService } from './api-call-log-facade.service';

describe('ApiCallLogFacadeService', () => {
  let service: ApiCallLogFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCallLogFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
