import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherForecastData } from '../models/weather-forecast-data';
import { AppState } from './app.state';
import { retrievedWeatherForecastData } from './weather-forecast.actions';
import { selectWeatherForecastData } from './weather-forecast.selectors';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastFacadeService {

  constructor(private store: Store<AppState>) { }

  // selectors
  selectWeatherForecastData(): Observable<WeatherForecastData[]> {
    return this.store.select(selectWeatherForecastData);
  }

  // dispatches
  retrievedWeatherForecastData(weatherForecastData: WeatherForecastData[]) {
    this.store.dispatch(retrievedWeatherForecastData({ weatherForecastData: weatherForecastData }));
  }
}
