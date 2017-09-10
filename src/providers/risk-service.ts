import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class RiskService {
	private data:any;
	//private url : string ="../assets/risk.json";
  private url : string = 'https://sheetsu.com/apis/v1.0/a0ffe6173f26';
 // private url1:string = 'https://sheetsu.com/apis/v1.0/8cf755015588';


  constructor(public http: Http) {

  	/*this.data =[
  	{
    "Portfolio": "Structured Transaction",
    "Issue": "SF Mega Disclosure on a new platform (Big data and AWS) - Process impact is project delivery risk of delays.",
    "Impact" : "Medium",
    "Notes" : "Schedule needs to account for additional time from potential delays resulting in setting up new platform."
  	},
  	{
    "Portfolio": "Master Servicing",
    "Issue": "Lack of SME Depth",
    "Impact" : "High",
    "Notes" : "Increased team depth"
  	},
  	{
    "Portfolio": "Investor Reporting",
    "Issue": "SI and BAU Enhancements",
    "Impact" : "",
    "Notes" : "Efficiencies in managing multiple"
  	}

  	];*/
  }

 // getData() :  Observable<string[]>{

   getData():any{

  	// return Promise.resolve(this.data);
  		
  	//	if (this.data) {
  			
    // already loaded data
   // return Promise.resolve(this.data);
 // }
  
   return this.http.get(this.url)
      .map(res =>
       res.json());


/*return this.http.get(this.url)
                  .map(this.extractData)
                  .catch(this.handleError);*/
               
 };


private extractData(res: Response) {
  alert("inside extract data");
  let body = res.json();
  return body || { };
}

private handleError (error: Response | any) {

  alert("inside error data");
  alert("URL" + this.url);
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  alert("inside error datamessage " + error);
  console.error(errMsg);
  return Observable.throw(errMsg);
}


}
