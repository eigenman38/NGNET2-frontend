import { LogApiData } from "../models/log-api-data";
import { WeatherForecastData } from "../models/weather-forecast-data";

export interface AppState {
    weatherForecastData: WeatherForecastData[];
    allApiCallLogs: LogApiData[];
}