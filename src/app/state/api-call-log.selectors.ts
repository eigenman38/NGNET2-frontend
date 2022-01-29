import { createSelector, createFeatureSelector } from "@ngrx/store";
import { LogApiData } from "../models/log-api-data";

export const selectAllApiCallLogs = createFeatureSelector<LogApiData[]>('allApiCallLogs');