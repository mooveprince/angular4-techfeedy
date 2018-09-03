import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(private http:Http, private url:string) { }

  getAll () {
    return this.http.get(this.url)
      .map(response => response.json())
  }

}
