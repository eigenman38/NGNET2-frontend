import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';

export abstract class ApiBaseCallService {




    constructor(private httpClientBase: HttpClient, private storeBase: Store<AppState>,
        private baseUrlBase: string, private apiCall: string, protected serviceThatMadeCall: string) { };



    protected get fullApiCall() { return this.baseUrlBase + this.apiCall };




}