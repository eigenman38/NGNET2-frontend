import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap, catchError, EMPTY, of, throwError } from 'rxjs';
import { LoginModel } from '../../../models/login-model';
import { LoginReturnModel } from '../../../models/login-return-model';
import { AppState } from '../../../state/app.state';
import { PostApiBaseCallService } from '../../../services/base/post-api-base-call.service';
import { LoginModule } from '../../login.module';
import { logApiCall } from 'src/app/state/api-call-log.actions';

@Injectable() // for lazy loaded modules, think this is only way to avoid loading symbols
//as specifying the module here doesn't work
// provided in root?  well it doesn't actually call the constructor until injected by component
// but is that full modular?
// provided in root might be just fine in the longrun as not instatiated until injected.
// using the provided in root also alows tree shaking,but we are manuall pruning the tree with module provider array

export class LoginApiService extends PostApiBaseCallService {

  constructor(private httpClient: HttpClient, private store: Store<AppState>,
    @Inject('BASE_URL') private baseUrl: string) {
    super(httpClient, store, baseUrl, 'login', 'LoginApiService');
  }

  execute(loginModel: LoginModel): Observable<LoginReturnModel> {

    let returnFail: LoginReturnModel = { jwt: null };

    return this.httpClient.post<LoginReturnModel>(this.baseUrl + 'login', loginModel).
      pipe(
        tap(x => {

          let logApiData = {
            apiCall: this.fullApiCall,
            recordsReturned: 1,
            serviceThatMadeCall: this.serviceThatMadeCall,
            callerDateTime: new Date(),
            success: true
          }

          this.store.dispatch(logApiCall({ logApiData }));


        }),
        catchError(x => {

          let logApiData = {
            apiCall: this.fullApiCall,
            recordsReturned: 0,
            serviceThatMadeCall: this.serviceThatMadeCall,
            callerDateTime: new Date(),
            success: false
          }
          this.store.dispatch(logApiCall({ logApiData }));
          return EMPTY;
        })

      );
  }


}
