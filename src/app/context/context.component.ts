import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.css']
})
export class ContextComponent implements OnInit {

  @Input("sites") sites: any[];

  constructor() { }

  ngOnInit() {
  }

}
