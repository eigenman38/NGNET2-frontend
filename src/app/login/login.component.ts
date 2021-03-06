import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { LoginServiceService } from './services/logic-services/login-service.service';
import { ComponentBase } from '../component-base';
import { AuthenticatedLogicService } from '../services/logic-services/authenticated-logic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends ComponentBase implements OnInit, OnDestroy {


  public loginForm = this.formBuilder.group({
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,
    private router: Router, private loginServiceService: LoginServiceService, private authenticatedLogicService: AuthenticatedLogicService,
    protected elementRef: ElementRef
  ) {
    super(elementRef);

  }

  ngOnInit(): void {
    console.log(`ngOnInit: ${this.selector}`);

    this.activatedRoute.queryParamMap.subscribe((params) => {
      let email = params.get('email');
      this.loginForm.patchValue({ emailAddress: email, password: '' });

    });
  }

  ngOnDestroy(): void {

    this.destroy();

  }

  onSubmit() {
    console.log(`Login Form Submitted: ${JSON.stringify(this.loginForm.value)}`);

    this.loginServiceService.authenticate(this.loginForm.value);

    //now we can't redirect until state updated
    //also is this a logic/facade thing?
    //not sure because then that binds logic to ui a bit too much

    //so here we want to subscribe to the selector
    //and maybe this goes into the logic service which I guess turns it into a facade.

    this.authenticatedLogicService.execute()
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
