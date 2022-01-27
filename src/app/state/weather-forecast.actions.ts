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

export const apiCallLogged = createAction(
    '[Log]  Api Call Logged'
);

export const allApiCallLogsRetrieved = createAction(

    '[Log] All Api Call Logs Retrieved',
    props<{ weatherForecastData: LogApiData[] }>()
);