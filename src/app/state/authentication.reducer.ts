import { createReducer, on } from "@ngrx/store";
import { AuthenticationModel } from "../models/authentication-model";
import { removedAuthentication, retrievedLoginReturnModel } from "./authentication.actions";


export const initialState: AuthenticationModel = { loginReturnModel: null, loggedInTime: null };


export const authenticationReducer = createReducer(initialState,
    on(retrievedLoginReturnModel, (state, { loginReturnModel }) => {
        // state is a ref to the state obj
        // so correct thing to do is return brand new object.
        // enumerate out the previous properties
        // overwrite the new one.

        let newState = { ...state, loginReturnModel: loginReturnModel, loggedInTime: new Date() };


        return newState;
    }),

    on(removedAuthentication, (state) => {
        // state is a ref to the state obj
        // so correct thing to do is return brand new object.
        // enumerate out the previous properties
        // overwrite the new one.

        return initialState;
    })



)