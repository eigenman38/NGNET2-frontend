import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { AppState } from '../state/app.state';
import { WeatherForecastData } from '../models/weather-forecast-data';
import { logApiCall } from '../state/weather-forecast.actions';
import { LogApiData } from '../models/log-api-data';

@Injectable({ providedIn: 'root' })
export class GetWeatherForecastDataService {

    constructor(private httpClient: HttpClient, private store: Store<AppState>,
        @Inject('BASE_URL') private baseUrl: string) { }

    execute(): Observable<WeatherForecastData[]> {



        return this.httpClient.get<WeatherForecastData[]>(this.baseUrl + 'weatherforecast').
            pipe(tap(x => {

                let logApiData: LogApiData = {
                    apiCall: `${this.baseUrl}weatherforecast returned ${x?.length} records}`,
                    serviceThatMadeCall: `GetWeatherForecastDataService`,
                    callerDateTime: null

                }
                this.store.dispatch(logApiCall({ logApiData }));
            }));
    }


}