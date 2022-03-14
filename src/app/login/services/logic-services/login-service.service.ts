import { Injectable } from '@angular/core';
import { tap, catchError, of } from 'rxjs';
import { LoginModel } from 'src/app/models/login-model';
import { LoginReturnModel } from 'src/app/models/login-return-model';
import { LogicServiceBase } from 'src/app/services/base/logic-service-base.service';
import { AuthenticationFacadeService } from 'src/app/state/authentication-facade.service';
import { LoginApiService } from '../api-services/login-api.service';

@Injectable(

  // so even tho this is in lazy loaded module 
  //it's not used by anything outside the module
  //but it would force ppl to use it in the LLmodule if not provided in root.

)
export class LoginServiceService extends LogicServiceBase {



  constructor(private loginApiService: LoginApiService,
    private authenticationFacadeService: AuthenticationFacadeService) {
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
      .subscribe(loginReturnModel => {

        if (loginReturnModel?.jwt && loginReturnModel.jwt.length > 0) {
          this.authenticationFacadeService.retrievedLoginReturnModel(loginReturnModel);
          console.log(`LoginServiceService: Login Succeeded`);
        }
        else {
          this.authenticationFacadeService.removedAuthentication();
          console.error(`LoginServiceService: Login Failed`);
        }
      })

  }


}
