import { createAction, props } from "@ngrx/store";
import { WeatherForecastData } from "../models/weather-forecast-data";

export const retrievedWeatherForecastData = createAction(

    '[Weather Forecast]  Weather Forecast Retrieved',
    props<{ weatherForecastData: WeatherForecastData[] }>()
);


