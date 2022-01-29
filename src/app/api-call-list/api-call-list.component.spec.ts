import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallListComponent } from './api-call-list.component';

describe('ApiCallListComponent', () => {
  let component: ApiCallListComponent;
  let fixture: ComponentFixture<ApiCallListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCallListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
