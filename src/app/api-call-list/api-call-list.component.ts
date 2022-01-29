import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllApiCallLogs } from '../state/api-call-log.selectors';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-api-call-list',
  templateUrl: './api-call-list.component.html',
  styleUrls: ['./api-call-list.component.css']
})
export class ApiCallListComponent implements OnInit {

  public apiCallLogs$ = this.store.select(selectAllApiCallLogs);


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

}
