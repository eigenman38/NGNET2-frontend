import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap, catchError, EMPTY, of, throwError } from 'rxjs';
import { LoginModel } from '../models/login-model';
import { LoginReturnModel } from '../models/login-return-model';
import { AppState } from '../state/app.state';
import { PostApiBaseCallService } from './base/post-api-base-call.service';

@Injectable({
  providedIn: 'root'
})
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


        }),
        catchError(x => {
          console.error(`LoginApiService: Error: ${JSON.stringify(x)}`);
          //return EMPTY;
          //return throwError(() => new Error('HTTP: ERROR'));
          return of(returnFail);

        })
      );
  }


}
