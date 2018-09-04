import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appInfo: any;
  navBarItems:any[];
  splashImg: string;
  sites: any[];

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

    this.splashImg = '../assets/img/ckt-bg.jpg';

    this.sites = [
      {
        "name": "Hacker News", 
        "logo" : "../assets/img/hackernews-logo.jpg", 
        "siteUrl": "https://news.ycombinator.com/"
      },
      {
        "name": "Tech Meme", 
        "logo" : "../assets/img/techmeme-logo.png", 
        "siteUrl": "https://www.techmeme.com/"
      },
      {
        "name": "Tech Crunch", 
        "logo" : "../assets/img/techcrunch-logo.jpg", 
        "siteUrl": "https://techcrunch.com/"
      },
      {
        "name": "Product Hunt", 
        "logo" : "../assets/img/producthunt-logo.png", 
        "siteUrl": "https://www.producthunt.com/"
      }
    ]
  }
}
