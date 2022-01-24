import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LogApiCallService } from '../services/log-api-call.service';
import { logApiCall } from '../state/weather-forecast.actions';

@Injectable()
export class LogApiCallEffect {

    public logApiCallEffect$ = createEffect(() => this.actions$.pipe(
        ofType(logApiCall),
        mergeMap(action => this.logApiCallService.execute(action.logApiData)
        ),//mergeMap

    ),//pipe
        { dispatch: false }



    )//createEffect

    constructor(
        private actions$: Actions,
        private logApiCallService: LogApiCallService
    ) { }

}//class