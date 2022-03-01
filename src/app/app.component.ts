import { Component, ElementRef, OnInit } from '@angular/core';
import { ComponentBase } from './component-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends ComponentBase implements OnInit {
  title = 'app';

  constructor(protected elementRef: ElementRef) {
    super(elementRef);
  }

  ngOnInit(): void {
    console.log(`ngOnInit: ${this.selector}`);
  }
}
