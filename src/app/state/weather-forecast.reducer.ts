import { createReducer, on } from "@ngrx/store";
import { retrievedWeatherForecastData } from "./weather-forecast.actions";
import { WeatherForecastData } from "../models/weather-forecast-data";


export const initialState: WeatherForecastData[] = [];

export const weatherForecastReducer = createReducer(
    initialState,
    on(retrievedWeatherForecastData, (state, { weatherForecastData }) => {
        // state is a ref to the state obj
        // so correct thing to do is return brand new object.
        // enumerate out the previous properties
        // overwrite the new one.
        return weatherForecastData;
    })

);