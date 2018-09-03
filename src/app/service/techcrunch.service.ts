import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class TechcrunchService extends DataService {

  constructor(http:Http) { 
    super(http, 'https://zu89rny3jk.execute-api.us-east-1.amazonaws.com/prod/gettechcrunchfeed'); 
  }

}
