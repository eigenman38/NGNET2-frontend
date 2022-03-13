import { HttpClient } from '@angular/common/http';

export abstract class ApiBaseCallService {




    constructor(private httpClientBase: HttpClient,
        private baseUrlBase: string, private apiCall: string, protected serviceThatMadeCall: string) { };



    protected get fullApiCall() { return this.baseUrlBase + this.apiCall };




}