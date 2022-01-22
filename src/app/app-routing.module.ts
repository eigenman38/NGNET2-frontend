import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherForecastDataComponent } from './weather-forecast-data/weather-forecast-data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'weather-forecast-data', component: WeatherForecastDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
