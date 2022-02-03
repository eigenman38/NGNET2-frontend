import { Component, ElementRef, Inject, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  private selector: string;

  public homeNumberOfRowsToDisplay: number = 10;
  public todaysDate = new Date();

  constructor(private elementRef: ElementRef) {
    this.selector = elementRef.nativeElement.tagName;
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
