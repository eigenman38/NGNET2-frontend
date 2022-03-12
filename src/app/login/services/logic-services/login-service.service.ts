import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap, catchError, of, Observable } from 'rxjs';
import { LoginModel } from 'src/app/models/login-model';
import { LoginReturnModel } from 'src/app/models/login-return-model';
import { LogicServiceBase } from 'src/app/services/base/logic-service-base.service';
import { AppState } from 'src/app/state/app.state';
import { retrievedLoginReturnModel, removedAuthentication } from 'src/app/state/authentication.actions';
import { LoginApiService } from '../api-services/login-api.service';

@Injectable(

  // so even tho this is in lazy loaded module 
  //it's not used by anything outside the module
  //but it would force ppl to use it in the LLmodule if not provided in root.

)
export class LoginServiceService extends LogicServiceBase {



  constructor(private loginApiService: LoginApiService,
    private store: Store<AppState>) {
    super();
  }

  authenticate(loginModel: LoginModel) {

    let returnFail: LoginReturnModel = { jwt: null };


    this.loginApiService.execute(loginModel).
      pipe(
        tap(x => {


        }),
        catchError(x => {
          console.error(`LoginServiceService: Error: ${JSON.stringify(x)}`);
          //return EMPTY;
          //return throwError(() => new Error('HTTP: ERROR'));
          return of(returnFail);

        })
      )
      .subscribe(x => {

        if (x?.jwt && x.jwt.length > 0) {
          this.store.dispatch(retrievedLoginReturnModel({ loginReturnModel: x }));
          console.log(`LoginServiceService: Login Succeeded`);
        }
        else {
          this.store.dispatch(removedAuthentication());
          console.error(`LoginServiceService: Login Failed`);
        }
      })

  }


}
