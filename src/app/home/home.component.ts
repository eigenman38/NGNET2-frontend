import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { ComponentBase } from '../component-base';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends ComponentBase implements OnInit {


  public condition = false;

  public homeNumberOfRowsToDisplay: number = 10;
  public todaysDate = new Date();

  constructor(protected elementRef: ElementRef) {
    super(elementRef);
  }

  ngOnInit(): void {
    console.log(`ngOnInit: ${this.selector}`);
  }

  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.homeNumberOfRowsToDisplay = Math.min(40, Math.max(1, this.homeNumberOfRowsToDisplay + delta));
  }
}
