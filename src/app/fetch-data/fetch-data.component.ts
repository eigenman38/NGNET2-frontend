import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WeatherForecastData } from '../models/weather-forecast-data';
import { GetWeatherForecastDataService } from '../services/getWeatherForecastData.service';
import { AppState } from '../state/app.state';
import { getWeatherForecastData } from '../state/weather-forecast.actions';
import { selectWeatherForecastData } from '../state/weather-forecast.selectors';


@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {


  public weatherForecastData$ = this.store.select(selectWeatherForecastData);


  public forecasts: WeatherForecastData[] = [];



  constructor(private getWeatherForecastDataService: GetWeatherForecastDataService,
    private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.getWeatherForecastDataService.execute().subscribe(x => this.store.dispatch(getWeatherForecastData({ weatherForecastData: x })));
  }
}


