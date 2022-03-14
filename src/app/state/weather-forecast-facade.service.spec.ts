import { TestBed } from '@angular/core/testing';

import { WeatherForecastFacadeService } from './weather-forecast-facade.service';

describe('WeatherForecastFacadeService', () => {
  let service: WeatherForecastFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherForecastFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
