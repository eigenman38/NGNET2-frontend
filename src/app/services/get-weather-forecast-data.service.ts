import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { AppState } from '../state/app.state';
import { logApiCall } from '../state/weather-forecast.actions';
import { LogApiData } from '../models/log-api-data';
import { WeatherForecastData } from '../models/weather-forecast-data';
import { ApiBaseCallService } from './base/api-base-call.service';

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

                    this.logApiData.recordsReturned = x.length;
                    this.logApiData.success = true;
                    this.store.dispatch(logApiCall({ logApiData: this.logApiData }));
                }),
                catchError(x => {
                    this.logApiData.success = false;
                    this.store.dispatch(logApiCall({ logApiData: this.logApiData }));
                    return EMPTY;
                })
            );
    }

}