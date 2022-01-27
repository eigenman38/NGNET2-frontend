import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { AppState } from '../state/app.state';
import { PostApiBaseCallService } from './base/post-api-base-call.service';

@Injectable({ providedIn: 'root' })
export class LogApiCallService extends PostApiBaseCallService {


    constructor(private httpClient: HttpClient, private store: Store<AppState>,
        @Inject('BASE_URL') private baseUrl: string) {
        super(httpClient, store, baseUrl, 'logapicall', 'LogApiCallService');
    }

    execute<LogApiData>(logApiData: LogApiData): Observable<LogApiData> {
        return this.httpClient.post<LogApiData>(this.baseUrl + 'logapicall', logApiData).
            pipe(
                tap(x => {


                }),
                catchError(x => {
                    console.error(`LogApiCallService: Error: ${JSON.stringify(x)}`);
                    return EMPTY;

                })
            );
    }


}