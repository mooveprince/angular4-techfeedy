import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class ProducthuntService extends DataService {

  constructor(http:Http) { 
    super(http, 'https://7jlmauvwl4.execute-api.us-east-1.amazonaws.com/prod/getproducthunttrend'); 
  }

}
