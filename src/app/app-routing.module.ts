import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherForecastDataComponent } from './weather-forecast-data/weather-forecast-data.component';
import { HomeComponent } from './home/home.component';
import { FormsHomeComponent } from './forms-home/forms-home.component';
import { AuthenticateGuard } from './route-guards/authenticate.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'weather-forecast-data', component: WeatherForecastDataComponent, canActivate: [AuthenticateGuard] },
  { path: 'forms-home-page/:id', component: FormsHomeComponent, canActivate: [AuthenticateGuard] },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
