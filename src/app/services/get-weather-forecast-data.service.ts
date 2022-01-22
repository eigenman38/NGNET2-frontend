import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { of, Observable, tap } from 'rxjs';
import { WeatherForecastData } from '../models/weather-forecast-data';
import { AppState } from '../state/app.state';
import { logApiCall } from '../state/weather-forecast.actions';

@Injectable({ providedIn: 'root' })
export class GetWeatherForecastDataService {

    constructor(private httpClient: HttpClient, private store: Store<AppState>,
        @Inject('BASE_URL') private baseUrl: string) { }

    execute(): Observable<WeatherForecastData[]> {

        return this.httpClient.get<WeatherForecastData[]>(this.baseUrl + 'weatherforecast').
            pipe(tap(x => {
                this.store.dispatch(logApiCall({ value: `${this.baseUrl}weatherforecast returned ${x?.length} records}` }));
            }));
    }


}