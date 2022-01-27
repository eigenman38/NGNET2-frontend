import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { GetApiBaseCallService } from '../services/base/get-api-base-call.service';
import { GetAllApiCallLogs } from '../services/get-all-api-call-logs.service';
import { LogApiCallService } from '../services/log-api-call.service';
import { AppState } from '../state/app.state';
import { allApiCallLogsRetrieved, apiCallLogged, logApiCall } from '../state/weather-forecast.actions';

@Injectable()
export class GetAllApiCallLogsEffect {

    public getAllApiCallLogs$ = createEffect(() => this.actions$.pipe(
        ofType(apiCallLogged),
        tap(x => {
            console.log(`GetAllApiCallLogsEffect`);

        }),
        mergeMap(action => this.getAllApiCallLogs.execute().
            pipe(
                tap(x => {
                    if (x)
                        this.store.dispatch(allApiCallLogsRetrieved({ weatherForecastData: x }));

                })//tap
            )//pipe
        ),//mergeMap

    ),//pipe
        { dispatch: false }



    )//createEffect

    constructor(
        private actions$: Actions,
        private getAllApiCallLogs: GetAllApiCallLogs,
        private store: Store<AppState>
    ) { }

}//class