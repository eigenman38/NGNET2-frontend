import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthenticationModel } from '../models/authentication-model';
import { LoginReturnModel } from '../models/login-return-model';
import { AppState } from './app.state';
import { removedAuthentication, retrievedLoginReturnModel } from './authentication.actions';
import { selectAuthenticationModel } from './authentication.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationFacadeService {

  constructor(private store: Store<AppState>) { }

  // selectors

  selectAuthenticationModel(): Observable<AuthenticationModel> {
    return this.store.select(selectAuthenticationModel);
  }

  // dispatches
  retrievedLoginReturnModel(loginReturnModel: LoginReturnModel) {
    this.store.dispatch(retrievedLoginReturnModel({ loginReturnModel: loginReturnModel }));
  }

  removedAuthentication() {
    this.store.dispatch(removedAuthentication());
  }


}
