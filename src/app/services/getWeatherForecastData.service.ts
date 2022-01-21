import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { of, Observable } from 'rxjs';
import { WeatherForecastData } from '../models/weather-forecast-data';

@Injectable({ providedIn: 'root' })
export class GetWeatherForecastDataService {

    constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    execute(): Observable<WeatherForecastData[]> {

        return this.httpClient.get<WeatherForecastData[]>(this.baseUrl + 'weatherforecast');
    }
}