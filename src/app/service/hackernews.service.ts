import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Trends } from './../model/trends';
import 'rxjs/add/operator/map';

@Injectable()
export class HackernewsService {
  
  url:string;

  constructor(private http:Http) { 
    this.url = "https://ozlnvyhz2f.execute-api.us-east-1.amazonaws.com/prod/gethackerfeed";
  }

  getAllHackerNews () {
    return this.http.get(this.url)
      .map(response => response.json())
  }

}

