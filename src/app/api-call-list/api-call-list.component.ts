import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { LogApiData } from '../models/log-api-data';
import { GetAllApiCallLogsLogicService } from '../services/logic-services/api-call-log-logic.service';
import { ApiCallLogFacadeService } from '../state/api-call-log-facade.service';

@Component({
  selector: 'app-api-call-list',
  templateUrl: './api-call-list.component.html',
  styleUrls: ['./api-call-list.component.css']
})
export class ApiCallListComponent implements OnInit, OnChanges {
  @Input() numberOfRowsToDisplay: number = 10;
  @Output() numberOfRowsToDisplayChange = new EventEmitter<number>();

  public apiCallLogs$ = this.apiCallLogFacadeService.selectAllApiCallLogs();


  constructor(private apiCallLogFacadeService: ApiCallLogFacadeService,
    private getAllApiCallLogsLogicService: GetAllApiCallLogsLogicService) {
  }


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
