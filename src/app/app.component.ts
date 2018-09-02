import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private appInfo: any;
  private navBarItems:any[];

  constructor () {
    this.appInfo = {
      name: "TechFeedy",
      logo: "fa fa-newspaper-o",
      tagline: "All your trending topics in one place"
    };

    this.navBarItems = [
      {name: "About", url: "about"},
      {name: "Terms", url: "terms"},
      {name: "Contact", url: "contact"}
    ];
  }
}
