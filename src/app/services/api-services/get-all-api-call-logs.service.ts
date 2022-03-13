import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { LogApiData } from 'src/app/models/log-api-data';
import { GetApiBaseCallService } from '../base/get-api-base-call.service';



@Injectable({ providedIn: 'root' })
export class GetAllApiCallLogsService extends GetApiBaseCallService {



    constructor(private httpClient: HttpClient,
        @Inject('BASE_URL') private baseUrl: string) {
        super(httpClient, baseUrl, 'getallapicalllogs', 'GetAllApiCallLogs');
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