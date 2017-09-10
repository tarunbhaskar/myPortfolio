import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PortfolioReportService {

	private data:any;
//	private url : string ="../assets/portfolioReport.json";
  private url : string = '  https://sheetsu.com/apis/v1.0/30ecb898257e';

  constructor(public http: Http) {
  	/*this.data =[
 {
    "title": "TRAM",
    "tram": {
     "asset" : "Structured Transaction",
     "finding" : "6",
     "Observation":"21"
    },
    "tickets":{
     "portfolio" : "Structured Transaction",
     "closed" : "15",
     "completed":"5",
     "review" : "10"
    },
    "mul" : {
      "structuredTran" : "Accept Risk 2016 (Q4 2017)",
      "assetServicing" : "Remidiate 2016 (Q2)",
      "issuance" : "Remidiate 2016 (Q4 2016) Accept Risk 2016 (Q4 2017)",
      "reporting" : "Remidiate 2016 (Q2 2016)"
    }
  },
  {
    "title": "TRAM",
    "tram": {
     "asset" : "Asset Servicing",
     "finding" : "14",
     "Observation":"39"
    },
    "tickets":{
     "portfolio" : "Asset Servicing",
     "closed" : "0",
     "completed":"35",
     "review" : "6"
    },
    "mul" : {
      "structuredTran" : "",
      "assetServicing" : "",
      "issuance" : "",
      "reporting" : ""
    }
  },
  {
    "title": "TRAM",
    "tram": {
     "asset" : "Issuance/Disclosures",
     "finding" : "13",
     "Observation":"22"
    },
    "tickets":{
     "portfolio" : "Issuance/Disclosures",
     "closed" : "10",
     "completed":"3",
     "review" : "8"
    },
    "mul" : {
      "structuredTran" : "",
      "assetServicing" : "",
      "issuance" : "",
      "reporting" : ""
    }
  },
  {
    "title": "TRAM",
    "tram": {
     "asset" : "Investor Reporting",
     "finding" : "23",
     "Observation":"22"
    },
    "tickets":{
     "portfolio" : "Investor Reporting",
     "closed" : "10",
     "completed":"3",
     "review" : "8"
    },
    "mul" : {
      "structuredTran" : "",
      "assetServicing" : "",
      "issuance" : "",
      "reporting" : ""
    }
  }

];*/
    
  }

  getData():any {

      return this.http.get(this.url)
      .map(res =>
       res.json());

  	//return Promise.resolve(this.data);

     }

}
