import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { LogApiData } from '../models/log-api-data';
import { AppState } from '../state/app.state';

@Injectable({ providedIn: 'root' })
export class LogApiCallService {

    constructor(private httpClient: HttpClient, private store: Store<AppState>,
        @Inject('BASE_URL') private baseUrl: string) { }

    execute(logApiData: LogApiData): void {
        this.httpClient.post<string>(this.baseUrl + 'logapicall', logApiData);
    }


}