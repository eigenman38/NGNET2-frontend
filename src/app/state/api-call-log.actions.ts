import { createAction, props } from "@ngrx/store";
import { LogApiData } from "../models/log-api-data";


export const logApiCall = createAction(

    '[Log]  Log Api Call',
    props<{ logApiData: LogApiData }>()
);

export const apiCallLogged = createAction(
    '[Log]  Api Call Logged'
);

export const allApiCallLogsRetrieved = createAction(

    '[Log] All Api Call Logs Retrieved',
    props<{ logApiData: LogApiData[] }>()
);