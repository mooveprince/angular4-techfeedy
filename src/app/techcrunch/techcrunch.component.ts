import { TechcrunchService } from './../service/techcrunch.service';
import { Component, OnInit } from '@angular/core';
import { Trends } from './../model/trends';

@Component({
  selector: 'app-techcrunch',
  templateUrl: './techcrunch.component.html',
  styleUrls: ['./techcrunch.component.css']
})
export class TechcrunchComponent implements OnInit {

  trends: Trends[];

  constructor(private service:TechcrunchService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(trends => this.trends = trends.slice(0,10));
  }

}
