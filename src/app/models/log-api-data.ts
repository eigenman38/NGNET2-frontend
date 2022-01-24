export interface LogApiData {
    apiCall: string;
    recordsReturned: number;
    serviceThatMadeCall: string;
    callerDateTime: Date;
    success: boolean;
}