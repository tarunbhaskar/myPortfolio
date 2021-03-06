import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/*
  Generated class for the BudgetService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BudgetService {

	private data:any;
  private url : string = 'https://sheetsu.com/apis/v1.0/f7bb28b7140a';

  constructor(public http: Http) {
    
  }

   getData():any{

   return this.http.get(this.url)
      .map(res =>
       res.json());
               
 };

}
