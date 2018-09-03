import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Trends } from './../model/trends';
import 'rxjs/add/operator/map';

@Injectable()
export class HackernewsService extends DataService {

  constructor(http:Http) { 
    super(http, 'https://ozlnvyhz2f.execute-api.us-east-1.amazonaws.com/prod/gethackerfeed'); 
  }

}

