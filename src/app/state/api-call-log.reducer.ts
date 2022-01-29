import { createReducer, on } from "@ngrx/store";
import { LogApiData } from "../models/log-api-data";
import { allApiCallLogsRetrieved } from "./api-call-log.actions";

export const initialState: LogApiData[] = [];

export const apiCallLogReducer = createReducer(initialState,
    on(allApiCallLogsRetrieved, (state, { logApiData }) => {
        // state is a ref to the state obj
        // so correct thing to do is return brand new object.
        // enumerate out the previous properties
        // overwrite the new one.
        return logApiData;
    })
)
