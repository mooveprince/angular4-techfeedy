import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private appTitle: String;
  navBarItems:any[];

  constructor () {
    this.appTitle = "TechFeedy";

    this.navBarItems = [
      {name: "About", url: "about"},
      {name: "Terms", url: "terms"},
      {name: "Contact", url: "contact"}
    ];
  }
}
