import { createAction, props } from "@ngrx/store";
import { WeatherForecastData } from "../models/weather-forecast-data";

export const getWeatherForecastData = createAction(

    '[Weather Forecast] Fetch Weather Forecast',
    props<{ weatherForecastData: WeatherForecastData[] }>()
)