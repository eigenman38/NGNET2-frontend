import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap } from 'rxjs/operators';
import { apiCallLogged } from '../state/api-call-log.actions';
import { GetAllApiCallLogsLogicService } from '../services/logic-services/api-call-log-logic.service';

@Injectable()
export class GetAllApiCallLogsEffect {

    public getAllApiCallLogs$ = createEffect(() => this.actions$.pipe(
        ofType(apiCallLogged),
        tap(x => {
            console.log(`GetAllApiCallLogsEffect`);

        }),
        mergeMap((action) => this.getAllApiCallLogsLogicService.execute()

        ),//mergeMap

    ),//pipe
        { dispatch: false }



    )//createEffect

    constructor(
        private actions$: Actions,
        private getAllApiCallLogsLogicService: GetAllApiCallLogsLogicService
    ) { }

}//class