import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { LogApiCallLogicService } from '../services/logic-services/log-api-call-logic.service';
import { logApiCall } from '../state/api-call-log.actions';

@Injectable()
export class LogApiCallEffect {

    public logApiCallEffect$ = createEffect(() => this.actions$.pipe(
        ofType(logApiCall),
        tap(x => {
            console.log(`LogApiCallEffect`);

        }),
        mergeMap(action => this.logApiCallLogicService.execute(action.logApiData)

        ),//mergeMap

    ),//pipe
        { dispatch: false }



    )//createEffect

    constructor(
        private actions$: Actions,
        private logApiCallLogicService: LogApiCallLogicService
    ) { }

}//class