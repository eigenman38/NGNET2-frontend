import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms-home',
  templateUrl: './forms-home.component.html',
  styleUrls: ['./forms-home.component.css']
})
export class FormsHomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.queryParamMap.subscribe((params) => {

      console.log(`queryParamMap: ${JSON.stringify(params)}`);


    });

    this.activatedRoute.paramMap.subscribe((params) => {

      console.log(`paramMap: ${JSON.stringify(params)}}`);


    });
  }

}
