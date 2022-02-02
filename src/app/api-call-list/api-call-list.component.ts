import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllApiCallLogs } from '../state/api-call-log.selectors';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-api-call-list',
  templateUrl: './api-call-list.component.html',
  styleUrls: ['./api-call-list.component.css']
})
export class ApiCallListComponent implements OnInit, OnChanges {
  @Input() numberOfRowsToDisplay: number = 10;
  @Output() numberOfRowsToDisplayChange = new EventEmitter<number>();

  public apiCallLogs$ = this.store.select(selectAllApiCallLogs);


  constructor(private store: Store<AppState>) { }


  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
  }

  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.numberOfRowsToDisplay = Math.min(40, Math.max(1, this.numberOfRowsToDisplay + delta));
    this.numberOfRowsToDisplayChange.emit(this.numberOfRowsToDisplay);
  }

}
