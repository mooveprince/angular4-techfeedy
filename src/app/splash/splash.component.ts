import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  @Input("app-info") appInfo: String;
  @Input("splash-img") splashImg: String;
  
  constructor() { }

  ngOnInit() {
  }

}
