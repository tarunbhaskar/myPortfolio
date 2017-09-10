import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

	private url : string ="https://sheetsu.com/apis/v1.0/7ac0bfcca506";
  private url1 : string = "https://s3.amazonaws.com/mobiletest-dev1.com/data.json"
	private data : any;

  constructor(public http: Http) {

  /*	this.data = [
 {
    "id": "8a2bf844-42b5-482d-9f57-cf1583229939",
    "firstName": "Promod",
    "lastName": "Singh",
    "summary": {
      "heading": "Structured Transaction",
      "info": "Technology Team is responsible Technology Team is responsible Technology Team is responsible Technology Team is responsible Technology Team is responsible Technology Team is responsible Technology Team is responsible Technology Team is responsible Technology Team is responsible",
      "numberOfApps": "11",
      "externalFacing": "1",
      "bhsClassification": {
          "buyApps": "9",
          "holdApps" : "0",
          "sellApps" : "2"
      }
    },
    "accomplishments":{
      "enterpriseService":{
      	"title" : "Enterprise Settlement Service",
        "desc1" : "AutoWire 2.0 - Replace existing autowire application using new technology (Oct 22, 2016)",
        "desc2" : "STCMS 15.2 - Replatform STCMS and remove it from STAMP (Oct 22, 2016)",
        "desc3" : "STTS 16.1 - supports changes to STCMS and ADW retirement (Oct 22, 2016)",
        "desc4" : "Retire CMO Collat, STAMPS Clearance, Autowire 1.0"
      },
     "CIE" : {
     "title" : "CIE",
      "desc1" : "IRIS SC - A new system being developed to support CIE.This system will replace and retire MAST (mainframe) and Infinity (C++) (Feb 2017)",
      "desc2" : "STCMS 15.2 - support changes associated with CIE. (Oct 22, 2016)"
     },
     "CSPI": {
     	"title" : "CSPI",
       "desc1" : "IRIS SC - Change to only process MF Securities (Feb 2016)",
        "desc2" : "IRIS MC - Change to only process Non-std and MF pools (Feb 2016)",
        "desc3" : "MBS Tax - Change to process MF securities (Feb 2016)",
        "desc4" : "STCMS 15.3 - Change to support issuance of SF L2/L3 securities with CSS (Feb 2016)",
        "desc5" : "REMIC Tax - Change to support MF and non-std deals. (Feb 2016)"
     },
     "BAU" : {
     "title" : "BAU",
      "desc1" : "SF Mega Disclosure - new at issuance disclosure application using Big Data on AWS (Jul 2016)",
      "desc2" : "MBS Tax 16.1 - MUL (Java , Spring , minor enhancements) (Nov 2016)",
      "desc3" : "IRS Bond Admin 16.1 - MUL (Java 7 , Spring , Reports ) , STCMS changes (Oct 22, 2016)"
     }
    }
  },
  {
      "id": "8a8cb0fa-981c-4ed6-bf8a-ef0a84657198",
    "firstName": "Sarbari",
    "lastName": "Roy",
    "summary": {
      "heading": "Asset Servicing",
      "info": "Portfolio support specialized servicing",
      "numberOfApps": "13",
      "externalFacing": "4",
      "bhsClassification": {
          "buyApps": "0",
          "holdApps" : "10",
          "sellApps" : "3"
      }
    },
    "accomplishments":{
      "enterpriseService":{
        "desc1" : "AutoWire 2.0",
        "desc2" : "STCMS 15.2",
        "desc3" : "STTS 16.1",
        "desc4" : "Retire CMO"
      },
     "CIE" : {
      "desc1" : "IRIS",
      "desc2" : "STCMS"
     },
     "CSPI": {
       "desc1" : "IRIS SC",
        "desc2" : "IRIS MC",
        "desc3" : "MBS Tax",
        "desc4" : "STCMS",
        "desc5" : "REMIC Tax"
     },
     "BAU" : {
      "desc1" : "SF Mega Disclosure",
      "desc2" : "MBS Tax",
      "desc3" : "IRS Bond Admin"
     }
    }
  },
  {
      "id": "aa82640a-e24e-44a6-a642-b8cc8ce2143f",
    "firstName": "Nanjan",
    "lastName": "Selvaraj",  
     "summary": {
      "heading": "Disclosures",
      "info": "MBS Application disclosure support",
      "numberOfApps": "11",
      "externalFacing": "1",
      "bhsClassification": {
          "buyApps": "9",
          "holdApps" : "0",
          "sellApps" : "2"
      }
    },
    "accomplishments":{
      "enterpriseService":{
        "desc1" : "AutoWire 2.0",
        "desc2" : "STCMS 15.2",
        "desc3" : "STTS 16.1",
        "desc4" : "Retire CMO"
      },
     "CIE" : {
      "desc1" : "IRIS",
      "desc2" : "STCMS"
     },
     "CSPI": {
       "desc1" : "IRIS SC",
        "desc2" : "IRIS MC",
        "desc3" : "MBS Tax",
        "desc4" : "STCMS",
        "desc5" : "REMIC Tax"
     },
     "BAU" : {
      "desc1" : "SF Mega Disclosure",
      "desc2" : "MBS Tax",
      "desc3" : "IRS Bond Admin"
     }
    }
  },
  {
      "id": "8a2bf844-42b5-482d-9f57-cf1583229939",
    "firstName": "Michael",
    "lastName": "Wallace",
    "summary": {
      "heading": "Investor Reporting",
      "info": "SIR is a custom build",
      "numberOfApps": "5",
      "externalFacing": "1",
      "bhsClassification": {
          "buyApps": "9",
          "holdApps" : "0",
          "sellApps" : "2"
      }
    },
    "accomplishments":{
      "enterpriseService":{
        "desc1" : "AutoWire 2.0",
        "desc2" : "STCMS 15.2",
        "desc3" : "STTS 16.1",
        "desc4" : "Retire CMO"
      },
     "CIE" : {
      "desc1" : "IRIS",
      "desc2" : "STCMS"
     },
     "CSPI": {
       "desc1" : "IRIS SC",
        "desc2" : "IRIS MC",
        "desc3" : "MBS Tax",
        "desc4" : "STCMS",
        "desc5" : "REMIC Tax"
     },
     "BAU" : {
      "desc1" : "SF Mega Disclosure",
      "desc2" : "MBS Tax",
      "desc3" : "IRS Bond Admin"
     }
    }
  }
  
];*/
  }

  getData()  {
  //	return Promise.resolve(this.data);
  
  if (this.data) {
    return Promise.resolve(this.data);
  }
  return new Promise(resolve => {
    this.http.get(this.url)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  });

     }

}

