import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WeatherForecastData } from '../models/weather-forecast-data';
import { GetWeatherForecastDataService } from '../services/api-services/get-weather-forecast-data.service';
import { AppState } from '../state/app.state';
import { retrievedWeatherForecastData } from '../state/weather-forecast.actions';
import { selectWeatherForecastData } from '../state/weather-forecast.selectors';


@Component({
  selector: 'app-weather-forecast-data',
  templateUrl: './weather-forecast-data.component.html'
})
export class WeatherForecastDataComponent implements OnInit {


  public weatherForecastData$ = this.store.select(selectWeatherForecastData);





  constructor(private getWeatherForecastDataService: GetWeatherForecastDataService,
    private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.getWeatherForecastDataService.execute().subscribe(x => this.store.dispatch(retrievedWeatherForecastData({ weatherForecastData: x })));
  }
}


