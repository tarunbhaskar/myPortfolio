import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Summary } from '../summary/summary';
import {PortfolioActivity} from '../portfolio-activity/portfolio-activity';
import {Risk} from '../risk/risk';
import {Budget} from '../budget/budget';
import {PortfolioRoadmap} from '../portfolio-roadmap/portfolio-roadmap';
import {PortfolioReport} from '../portfolio-report/portfolio-report';


@IonicPage()
@Component({
  selector: 'page-structure',
  templateUrl: 'structure.html',
})
export class Structure {

	private clickedParameter : string ="";
	private heading : string ="";
  private subHeading : string ="";

  constructor(public navCtrl: NavController, public navParams: NavParams ) {

  	this.clickedParameter = navParams.get('param');

  	if(this.clickedParameter  === 'dir1'){
  		this.heading = "Structured Transaction";
      this.subHeading = "Pramod Singh";
  	}else if(this.clickedParameter  === 'dir2'){
      this.heading = "Master/Asset Servicing";
  		this.subHeading = "Sarbari Roy";
  	}else if(this.clickedParameter  === 'dir3'){
      this.heading = "Pooling/Disclosures";
  			this.subHeading = "Nanjan Selvaraj";
  	}else if(this.clickedParameter  === 'dir4'){
      this.heading = "Investor Reporting";
  			this.subHeading = "Michael Wallace";
  	}
  
  }

  viewSummary(routeParam){

  	console.log('this.parameter1' + routeParam);
   		
   			this.navCtrl.push(Summary , {paramPassed : routeParam});	
   	}

   	viewPortfolioActivity(routeParam){
   		this.navCtrl.push(PortfolioActivity , {paramPassed : routeParam});
   	}

   	viewRisk(){
   		this.navCtrl.push(Risk);
   	}

    viewBusinessVol(routeParam){
       this.navCtrl.push(Budget , {paramPassed : routeParam});
    }

    viewRoadmap(routeParam){
       this.navCtrl.push(PortfolioRoadmap , {paramPassed : routeParam} );
    }

   	viewPortfolio(routeParam){
   			this.navCtrl.push(PortfolioReport , {paramPassed : routeParam});
   	}

   	 goBack(){
  	this.navCtrl.pop();
  }

}
