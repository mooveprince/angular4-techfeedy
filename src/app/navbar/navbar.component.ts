import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input('app-info') appInfo: any;
  @Input('navbar-items') navBarItems: any[];

  constructor() { }

  ngOnInit() {
  }

}
