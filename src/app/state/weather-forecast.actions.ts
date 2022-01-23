import { createAction, props } from "@ngrx/store";
import { LogApiData } from "../models/log-api-data";
import { WeatherForecastData } from "../models/weather-forecast-data";

export const retrievedWeatherForecastData = createAction(

    '[Weather Forecast]  Weather Forecast Retrieved',
    props<{ weatherForecastData: WeatherForecastData[] }>()
);


export const logApiCall = createAction(

    '[Log]  Log Api Call',
    props<{ logApiData: LogApiData }>()
);