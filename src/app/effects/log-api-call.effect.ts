import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { LogApiCallService } from '../services/api-services/log-api-call.service';
import { logApiCall, apiCallLogged } from '../state/api-call-log.actions';
import { AppState } from '../state/app.state';

@Injectable()
export class LogApiCallEffect {

    public logApiCallEffect$ = createEffect(() => this.actions$.pipe(
        ofType(logApiCall),
        tap(x => {
            console.log(`LogApiCallEffect`);

        }),
        mergeMap(action => this.logApiCallService.execute(action.logApiData).
            pipe(
                tap(x => {
                    if (x)
                        this.store.dispatch(apiCallLogged());

                })//tap
            )//pipe
        ),//mergeMap

    ),//pipe
        { dispatch: false }



    )//createEffect

    constructor(
        private actions$: Actions,
        private logApiCallService: LogApiCallService,
        private store: Store<AppState>
    ) { }

}//class