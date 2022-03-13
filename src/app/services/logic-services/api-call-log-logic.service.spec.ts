import { TestBed } from '@angular/core/testing';

import { GetAllApiCallLogsLogicService } from './api-call-log-logic.service';

describe('ApiCallLogService', () => {
  let service: GetAllApiCallLogsLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllApiCallLogsLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
