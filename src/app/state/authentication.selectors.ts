import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AuthenticationModel } from "../models/authentication-model";


export const selectAuthenticationModel = createFeatureSelector<AuthenticationModel>('authenticationModel');

export const selectIsLoggedIn = createSelector(selectAuthenticationModel,
    (state: AuthenticationModel) => {

        if (state?.loginReturnModel?.jwt != null && state.loginReturnModel.jwt.length > 0)
            return true;
        else
            return false;

    });