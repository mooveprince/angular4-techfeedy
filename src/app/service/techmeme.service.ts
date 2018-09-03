import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';


@Injectable()
export class TechmemeService extends DataService {

  constructor(http:Http) { 
    super(http, 'https://82rrysxymg.execute-api.us-east-1.amazonaws.com/prod/gettechmemefeed'); 
  }

}
