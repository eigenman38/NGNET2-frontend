import { LoginReturnModel } from "./login-return-model";

export interface AuthenticationModel {

    loginReturnModel: LoginReturnModel | null;
    loggedInTime: Date | null;
}