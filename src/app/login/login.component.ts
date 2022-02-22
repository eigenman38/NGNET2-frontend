import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { LoginApiService } from '../services/login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.formBuilder.group({
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,
    private router: Router,
    private loginApiService: LoginApiService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      let email = params.get('email');
      this.loginForm.patchValue({ emailAddress: email, password: '' });

    });
  }

  onSubmit() {
    console.log(`Login Form Submitted: ${JSON.stringify(this.loginForm.value)}`);

    this.loginApiService.execute(this.loginForm.value).pipe(
      catchError(x => {
        return EMPTY;

      })
    )
      .subscribe(x => {

        if (x?.jwt.length > 0)
          this.router.navigate(['']);



      })



  }

}
