import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LogApiData } from 'src/app/models/log-api-data';
import { ApiCallLogFacadeService } from 'src/app/state/api-call-log-facade.service';
import { LogApiCallService } from '../api-services/log-api-call.service';
import { LogicServiceBase } from '../base/logic-service-base.service';

@Injectable({
  providedIn: 'root'
})
export class LogApiCallLogicService extends LogicServiceBase {

  constructor(private apiCallLogFacadeService: ApiCallLogFacadeService, private logApiCallService: LogApiCallService) {
    super();
  }

  public execute(logApiData: LogApiData): Observable<LogApiData> {

    return this.logApiCallService.execute(logApiData)
      .pipe(
        tap(x => {
          if (x)
            this.apiCallLogFacadeService.apiCallLogged();

        })//tap
      )//pipe
  }
}
