import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { WeatherForecastData } from 'src/app/models/weather-forecast-data';
import { ApiCallLogFacadeService } from 'src/app/state/api-call-log-facade.service';
import { ApiBaseCallService } from '../base/api-base-call.service';

@Injectable({ providedIn: 'root' })
export class GetWeatherForecastDataService extends ApiBaseCallService {



    constructor(private httpClient: HttpClient, private apiCallLogFacadeService: ApiCallLogFacadeService,
        @Inject('BASE_URL') private baseUrl: string) {
        super(httpClient, baseUrl, 'weatherforecast', 'GetWeatherForecastDataService');
    }

    execute(): Observable<WeatherForecastData[]> {



        return this.httpClient.get<WeatherForecastData[]>(this.fullApiCall).
            pipe(
                tap(x => {

                    let logApiData = {
                        apiCall: this.fullApiCall,
                        recordsReturned: x.length,
                        serviceThatMadeCall: this.serviceThatMadeCall,
                        callerDateTime: new Date(),
                        success: true
                    }


                    this.apiCallLogFacadeService.logApiCall(logApiData);
                }),
                catchError(x => {

                    let logApiData = {
                        apiCall: this.fullApiCall,
                        recordsReturned: 0,
                        serviceThatMadeCall: this.serviceThatMadeCall,
                        callerDateTime: new Date(),
                        success: false
                    }
                    this.apiCallLogFacadeService.logApiCall(logApiData);
                    return EMPTY;
                })
            );
    }

}