import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, Subject, takeUntil } from 'rxjs';
import { LoginApiService } from './services/api-services/login-api.service';
import { AppState } from '../state/app.state';
import { removedAuthentication, retrievedLoginReturnModel } from '../state/authentication.actions';
import { LoginServiceService } from './services/logic-services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private destroyed$: Subject<boolean> = new Subject<boolean>();
  private selector: string;



  public loginForm = this.formBuilder.group({
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,
    private router: Router, private loginServiceService: LoginServiceService,
    private elementRef: ElementRef
  ) {
    this.selector = elementRef.nativeElement.tagName;

  }

  ngOnInit(): void {
    console.log(`ngOnInit: ${this.selector}`);

    this.activatedRoute.queryParamMap.subscribe((params) => {
      let email = params.get('email');
      this.loginForm.patchValue({ emailAddress: email, password: '' });

    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
    console.log(`ngOnDestroy: ${this.selector}`);

  }

  onSubmit() {
    console.log(`Login Form Submitted: ${JSON.stringify(this.loginForm.value)}`);

    this.loginServiceService.authenticate(this.loginForm.value);

    //now we can't redirect until state updated
    //also is this a logic/facade thing?
    //not sure because then that binds logic to ui a bit too much

    //so here we want to subscribe to the selector
    //and maybe this goes into the logic service which I guess turns it into a facade.

    this.loginServiceService.isLoggedIn()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(x => {

        //on redirect, component is unloaded so unsubscribe should occur

        //redirect here because we want the component in charge of ui

        //now is it possible we need a pending state?
        //not sure
        if (x) {
          this.router.navigate(['']);
        }

      });


  }

}
