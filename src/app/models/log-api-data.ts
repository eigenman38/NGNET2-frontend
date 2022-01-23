export interface LogApiData {
    apiCall: string;
    serviceThatMadeCall: string;
    callerDateTime: Date | null; //investigate this
}