import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentBase } from '../component-base';

@Component({
  selector: 'app-forms-home',
  templateUrl: './forms-home.component.html',
  styleUrls: ['./forms-home.component.css']
})
export class FormsHomeComponent extends ComponentBase implements OnInit {

  constructor(protected elementRef: ElementRef, private activatedRoute: ActivatedRoute) {
    super(elementRef);

  }

  ngOnInit(): void {

    console.log(`ngOnInit: ${this.selector}`);


    this.activatedRoute.queryParamMap.subscribe((params) => {

      console.log(`queryParamMap: ${JSON.stringify(params)}`);


    });

    this.activatedRoute.paramMap.subscribe((params) => {

      console.log(`paramMap: ${JSON.stringify(params)}}`);


    });
  }

}
