import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { weatherForecastReducer } from './state/weather-forecast.reducer';
import { WeatherForecastDataComponent } from './weather-forecast-data/weather-forecast-data.component';
import { EffectsModule } from '@ngrx/effects';
import { LogApiCallEffect } from './effects/log-api-call.effect';
import { GetAllApiCallLogsEffect } from './effects/get-all-api-call-logs.effect';
import { apiCallLogReducer } from './state/api-call-log.reducer';
import { ApiCallListComponent } from './api-call-list/api-call-list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsHomeComponent } from './forms-home/forms-home.component';
import { ExponentPipe } from './exponent.pipe';
import { TemplateFormComponent } from './template-form/template-form.component';

//

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    WeatherForecastDataComponent,
    ApiCallListComponent,
    ReactiveFormComponent,
    FormsHomeComponent,
    ExponentPipe,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ weatherForecastData: weatherForecastReducer, allApiCallLogs: apiCallLogReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
    EffectsModule.forRoot([LogApiCallEffect, GetAllApiCallLogsEffect])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
