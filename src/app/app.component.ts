import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private appInfo: any;
  private navBarItems:any[];
  private splashImg: string;
  private sites: any[];

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
        "siteUrl": "https://news.ycombinator.com/",
        "trendUrl" : "https://ozlnvyhz2f.execute-api.us-east-1.amazonaws.com/prod/gethackerfeed"
      },
      {
        "name": "Tech Meme", 
        "logo" : "../assets/img/techmeme-logo.png", 
        "siteUrl": "https://www.techmeme.com/",
        "trendUrl" : "https://82rrysxymg.execute-api.us-east-1.amazonaws.com/prod/gettechmemefeed"
      },
      {
        "name": "Tech Crunch", 
        "logo" : "../assets/img/techcrunch-logo.jpg", 
        "siteUrl": "https://techcrunch.com/",
        "trendUrl" : "https://zu89rny3jk.execute-api.us-east-1.amazonaws.com/prod/gettechcrunchfeed"
      },
      {
        "name": "Product Hunt", 
        "logo" : "../assets/img/producthunt-logo.png", 
        "siteUrl": "https://www.producthunt.com/",
        "trendUrl" : "https://7jlmauvwl4.execute-api.us-east-1.amazonaws.com/prod/getproducthunttrend"
      }
    ]
  }
}
