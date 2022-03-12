import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectIsLoggedIn } from 'src/app/state/authentication.selectors';
import { LogicServiceBase } from '../base/logic-service-base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedService extends LogicServiceBase {

  constructor(private store: Store<AppState>) {
    super();
  }

  public authenticated(): Observable<boolean> {
    return this.store.select(selectIsLoggedIn);
  }
}
