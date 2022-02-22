import { AuthenticationModel } from "../models/authentication-model";
import { LogApiData } from "../models/log-api-data";
import { WeatherForecastData } from "../models/weather-forecast-data";

export interface AppState {
    weatherForecastData: WeatherForecastData[];
    allApiCallLogs: LogApiData[];
    authenticationModel: AuthenticationModel;
}