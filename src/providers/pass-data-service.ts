import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PassDataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PassDataService {

	private appDetailsResponse: any;
	private riskResponse: any;
	private budgetResponse: any;
	private roadMapResponse: any;
	private dataResponse: any;

  constructor(public http: Http) {
    
  }

  getAppDetail(): any{
  	return this.appDetailsResponse;
  }

  setAppDetail(appDetailsResponse) : any {
  	 this.appDetailsResponse = appDetailsResponse;
  }

   getRiskDetail(): any{
  	return this.riskResponse;
  }

  setRiskDetail(riskResponse) : any {
  	 this.riskResponse = riskResponse;
  }

   getBudgetDetail(): any{
  	return this.budgetResponse;
  }

  setBudgetDetail(budgetResponse) : any {
  	 this.budgetResponse = budgetResponse;
  }

   getRoadMapDetail(): any{
  	return this.roadMapResponse;
  }

  setRoadMapDetail(roadMapResponse) : any {
  	 this.roadMapResponse = roadMapResponse;
  }

    getDataDetail(): any{
  	return this.dataResponse;
  }

  setDataDetail(dataResponse) : any {
  	 this.dataResponse = dataResponse;
  }



}
