import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { LogApiData } from 'src/app/models/log-api-data';
import { allApiCallLogsRetrieved } from 'src/app/state/api-call-log.actions';
import { selectAllApiCallLogs } from 'src/app/state/api-call-log.selectors';
import { AppState } from 'src/app/state/app.state';
import { GetAllApiCallLogsService } from '../api-services/get-all-api-call-logs.service';
import { LogicServiceBase } from '../base/logic-service-base.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllApiCallLogsLogicService extends LogicServiceBase {

  constructor(private store: Store<AppState>, private getAllApiCallLogsService: GetAllApiCallLogsService) {
    super();
  }

  // calls the api and handles store stuff for it
  public execute(): Observable<LogApiData[]> {

    return this.getAllApiCallLogsService.execute()
      .pipe(
        tap(logApiData => {
          if (logApiData)
            this.store.dispatch(allApiCallLogsRetrieved({ logApiData: logApiData }));

        })//tap
      )//pipe

  }

  // selectors
  public getAllApiCallLogs(): Observable<LogApiData[]> {
    return this.store.select(selectAllApiCallLogs);
  }


}
