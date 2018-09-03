import { Component, OnInit } from '@angular/core';
import { ProducthuntService } from './../service/producthunt.service';


@Component({
  selector: 'app-producthunt',
  templateUrl: './producthunt.component.html',
  styleUrls: ['./producthunt.component.css']
})
export class ProducthuntComponent implements OnInit {

  trends: any[];

  constructor(private service:ProducthuntService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(trends => this.trends = trends.posts);
  }

}
