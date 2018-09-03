import { Trends } from './../model/trends';
import { HackernewsService } from './../service/hackernews.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hackernews',
  templateUrl: './hackernews.component.html',
  styleUrls: ['./hackernews.component.css']
})
export class HackernewsComponent implements OnInit {

  trends: Trends[];

  constructor(private service:HackernewsService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(trends => this.trends = trends.slice(0,10));
  }

}
