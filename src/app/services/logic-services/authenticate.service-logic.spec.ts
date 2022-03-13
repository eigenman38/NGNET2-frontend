import { TestBed } from '@angular/core/testing';

import { AuthenticatedLogicService } from './authenticated-logic.service';

describe('AuthenticateService', () => {
  let service: AuthenticatedLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticatedLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
