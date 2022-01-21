import { createSelector, createFeatureSelector } from "@ngrx/store";
import { WeatherForecastData } from "../models/weather-forecast-data";


export const selectWeatherForecastData = createFeatureSelector<WeatherForecastData[]>('weatherForecastData');

// export const selectWeatherForecastData = createSelector(selectWeatherForecastState, (selectWeatherForecastState) => {
//     return selectWeatherForecastState.currentWeatherForecastData;
// });


