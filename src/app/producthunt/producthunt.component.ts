import { Component, OnInit } from '@angular/core';
import { Trends } from './../model/trends';
import { ProducthuntService } from './../service/producthunt.service';


@Component({
  selector: 'app-producthunt',
  templateUrl: './producthunt.component.html',
  styleUrls: ['./producthunt.component.css']
})
export class ProducthuntComponent implements OnInit {

  trends: Trends[];

  constructor(private service:ProducthuntService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(trends => this.trends = trends.slice(0,10));
  }

}
