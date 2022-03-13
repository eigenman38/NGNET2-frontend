import { TestBed } from '@angular/core/testing';

import { LogApiCallLogicService } from './log-api-call-logic.service';

describe('LogApiCallLogicService', () => {
  let service: LogApiCallLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogApiCallLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
