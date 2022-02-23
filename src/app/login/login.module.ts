import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginApiService } from './services/api-services/login-api.service';
import { LoginServiceService } from './services/logic-services/login-service.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginApiService,
    LoginServiceService
  ]
})
export class LoginModule { }
