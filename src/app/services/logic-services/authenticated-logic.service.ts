import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { AuthenticationFacadeService } from 'src/app/state/authentication-facade.service';
import { LogicServiceBase } from '../base/logic-service-base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedLogicService extends LogicServiceBase {

  constructor(private authenticationFacadeService: AuthenticationFacadeService) {
    super();
  }

  public execute(): Observable<boolean> {

    return this.authenticationFacadeService.selectAuthenticationModel()
      .pipe(
        map(x => {

          if (x?.loginReturnModel?.jwt != null && x.loginReturnModel.jwt.length > 0)
            return true;

          else
            return false;
        })//map
      )//pipe
  }


}
