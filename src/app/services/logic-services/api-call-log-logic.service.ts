import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LogApiData } from 'src/app/models/log-api-data';
import { ApiCallLogFacadeService } from 'src/app/state/api-call-log-facade.service';
import { GetAllApiCallLogsService } from '../api-services/get-all-api-call-logs.service';
import { LogicServiceBase } from '../base/logic-service-base.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllApiCallLogsLogicService extends LogicServiceBase {

  constructor(private apiCallLogFacadeService: ApiCallLogFacadeService, private getAllApiCallLogsService: GetAllApiCallLogsService) {
    super();
  }

  // calls the api and handles store stuff for it
  public execute(): Observable<LogApiData[]> {

    return this.getAllApiCallLogsService.execute()
      .pipe(
        tap(logApiData => {
          if (logApiData)
            this.apiCallLogFacadeService.allApiCallLogsRetrieved(logApiData);

        })//tap
      )//pipe

  }



}
