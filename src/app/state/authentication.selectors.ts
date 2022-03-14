import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AuthenticationModel } from "../models/authentication-model";


export const selectAuthenticationModel = createFeatureSelector<AuthenticationModel>('authenticationModel');

