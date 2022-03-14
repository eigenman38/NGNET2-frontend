import { Component, OnInit } from '@angular/core';
import { GetWeatherForecastDataService } from '../services/api-services/get-weather-forecast-data.service';
import { WeatherForecastFacadeService } from '../state/weather-forecast-facade.service';


@Component({
  selector: 'app-weather-forecast-data',
  templateUrl: './weather-forecast-data.component.html'
})
export class WeatherForecastDataComponent implements OnInit {


  public weatherForecastData$ = this.weatherForecastFacadeService.selectWeatherForecastData();


  constructor(private weatherForecastFacadeService: WeatherForecastFacadeService,
    private getWeatherForecastDataService: GetWeatherForecastDataService) {


  }

  ngOnInit(): void {
    //todo: dispatch belongs in the logic service
    this.getWeatherForecastDataService.execute()
      .subscribe(weatherForecastData => this.weatherForecastFacadeService.retrievedWeatherForecastData(weatherForecastData));
  }
}


