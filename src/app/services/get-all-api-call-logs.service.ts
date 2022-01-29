import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, Observable, of, tap } from 'rxjs';
import { LogApiData } from '../models/log-api-data';
import { AppState } from '../state/app.state';
import { ApiBaseCallService } from './base/api-base-call.service';
import { GetApiBaseCallService } from './base/get-api-base-call.service';


@Injectable({ providedIn: 'root' })
export class GetAllApiCallLogs extends GetApiBaseCallService {



    constructor(private httpClient: HttpClient, private store: Store<AppState>,
        @Inject('BASE_URL') private baseUrl: string) {
        super(httpClient, store, baseUrl, 'getallapicalllogs', 'GetAllApiCallLogs');
    }

    execute(): Observable<LogApiData[]> {

        //  don't want to issue action to log this api failure since it is part of the
        // api error log system
        return this.httpClient.get<LogApiData[]>(this.fullApiCall).
            pipe(
                tap(x => {


                }),
                catchError(x => {
                    console.error(`GetAllApiCallLogs: Error: ${x}`);
                    return EMPTY;

                })
            );
        return EMPTY;
    }



}