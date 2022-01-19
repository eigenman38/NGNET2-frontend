import { Component, ElementRef, Inject, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  private selector: string;

  constructor(private elementRef: ElementRef) {
    this.selector = elementRef.nativeElement.tagName;
  }

  ngOnInit(): void {
    console.log(`ngOnInit: ${this.selector}`);
  }
}
