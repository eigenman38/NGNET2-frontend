import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LogApiData } from '../models/log-api-data';
import { allApiCallLogsRetrieved, apiCallLogged, logApiCall } from './api-call-log.actions';
import { selectAllApiCallLogs } from './api-call-log.selectors';
import { AppState } from './app.state';

@Injectable({
  providedIn: 'root'
})
export class ApiCallLogFacadeService {

  constructor(private store: Store<AppState>) { }

  // selectors
  selectAllApiCallLogs(): Observable<LogApiData[]> {
    return this.store.select(selectAllApiCallLogs);
  }

  // dispatches
  logApiCall(logApiData: LogApiData) {
    this.store.dispatch(logApiCall({ logApiData: logApiData }));
  }

  apiCallLogged() {
    this.store.dispatch(apiCallLogged());
  }

  allApiCallLogsRetrieved(logApiData: LogApiData[]) {
    this.store.dispatch(allApiCallLogsRetrieved({ logApiData: logApiData }));
  }
}
