import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { AppState } from '../state/app.state';
import { LogApiData } from '../models/log-api-data';
import { WeatherForecastData } from '../models/weather-forecast-data';
import { ApiBaseCallService } from './base/api-base-call.service';
import { logApiCall } from '../state/api-call-log.actions';

@Injectable({ providedIn: 'root' })
export class GetWeatherForecastDataService extends ApiBaseCallService {



    constructor(private httpClient: HttpClient, private store: Store<AppState>,
        @Inject('BASE_URL') private baseUrl: string) {
        super(httpClient, store, baseUrl, 'weatherforecast', 'GetWeatherForecastDataService');
    }

    execute(): Observable<WeatherForecastData[]> {



        return this.httpClient.get<WeatherForecastData[]>(this.fullApiCall).
            pipe(
                tap(x => {

                    let logApiData = {
                        apiCall: this.fullApiCall,
                        recordsReturned: x.length,
                        serviceThatMadeCall: this.serviceThatMadeCall,
                        callerDateTime: new Date(),
                        success: true
                    }


                    this.store.dispatch(logApiCall({ logApiData }));
                }),
                catchError(x => {

                    let logApiData = {
                        apiCall: this.fullApiCall,
                        recordsReturned: 0,
                        serviceThatMadeCall: this.serviceThatMadeCall,
                        callerDateTime: new Date(),
                        success: false
                    }
                    this.store.dispatch(logApiCall({ logApiData }));
                    return EMPTY;
                })
            );
    }

}