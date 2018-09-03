import { TechmemeService } from './../service/techmeme.service';
import { Component, OnInit } from '@angular/core';
import { Trends } from './../model/trends';

@Component({
  selector: 'app-techmeme',
  templateUrl: './techmeme.component.html',
  styleUrls: ['./techmeme.component.css']
})
export class TechmemeComponent implements OnInit {

  trends: Trends[];

  constructor(private service:TechmemeService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(trends => this.trends = trends.slice(0,10));
  }

}
