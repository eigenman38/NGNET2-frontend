import { createAction, props } from "@ngrx/store";
import { LoginReturnModel } from "../models/login-return-model";


export const retrievedLoginReturnModel = createAction(

    '[Authentication]  LoginReturnModel Retrieved',
    props<{ loginReturnModel: LoginReturnModel }>()
);

export const removedAuthentication = createAction(

    '[Authentication]  Authentication Removed'

);
