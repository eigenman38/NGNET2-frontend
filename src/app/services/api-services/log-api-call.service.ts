import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { LogApiData } from '../../models/log-api-data';
import { PostApiBaseCallService } from '../base/post-api-base-call.service';

@Injectable({ providedIn: 'root' })
export class LogApiCallService extends PostApiBaseCallService {


    constructor(private httpClient: HttpClient,
        @Inject('BASE_URL') private baseUrl: string) {
        super(httpClient, baseUrl, 'logapicall', 'LogApiCallService');
    }

    execute(logApiData: LogApiData): Observable<LogApiData> {
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