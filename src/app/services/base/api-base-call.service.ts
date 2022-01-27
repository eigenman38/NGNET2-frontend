import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { LogApiData } from '../../models/log-api-data';
import { AppState } from '../../state/app.state';

export abstract class ApiBaseCallService {


    // protected logApiData: LogApiData = {
    //     apiCall: this.fullApiCall,
    //     recordsReturned: 0,
    //     serviceThatMadeCall: this.serviceThatMadeCall,
    //     callerDateTime: new Date(),
    //     success: false
    // }

    constructor(private httpClientBase: HttpClient, private storeBase: Store<AppState>,
        private baseUrlBase: string, private apiCall: string, protected serviceThatMadeCall: string) { };



    protected get fullApiCall() { return this.baseUrlBase + this.apiCall };




}