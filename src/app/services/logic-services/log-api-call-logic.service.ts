import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { LogApiData } from 'src/app/models/log-api-data';
import { apiCallLogged } from 'src/app/state/api-call-log.actions';
import { AppState } from 'src/app/state/app.state';
import { LogApiCallService } from '../api-services/log-api-call.service';
import { LogicServiceBase } from '../base/logic-service-base.service';

@Injectable({
  providedIn: 'root'
})
export class LogApiCallLogicService extends LogicServiceBase {

  constructor(private logApiCallService: LogApiCallService,
    private store: Store<AppState>) {
    super();
  }

  public execute(logApiData: LogApiData): Observable<LogApiData> {

    return this.logApiCallService.execute(logApiData)
      .pipe(
        tap(x => {
          if (x)
            this.store.dispatch(apiCallLogged());

        })//tap
      )//pipe
  }
}
