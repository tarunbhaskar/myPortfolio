import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Summary } from '../summary/summary';
import {PortfolioActivity} from '../portfolio-activity/portfolio-activity';
import {Risk} from '../risk/risk';
import {Budget} from '../budget/budget';
import {PortfolioRoadmap} from '../portfolio-roadmap/portfolio-roadmap';
import {PortfolioReport} from '../portfolio-report/portfolio-report';
import {SpeechRecognition} from '@ionic-native/speech-recognition';


@IonicPage()
@Component({
  selector: 'page-structure',
  templateUrl: 'structure.html',
})
export class Structure {

	private clickedParameter : string ="";
	private heading : string ="";
  private subHeading : string ="";

  private speechList : Array<string> = [];
  private languagesList: Array<string>= [];
  private permissionThere: boolean;
  private isAvailableAndroid: boolean;
  private hideDropdownFlag: boolean = false;
    

  constructor(private speech: SpeechRecognition ,public navCtrl: NavController, public navParams: NavParams ) {

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

   /**********speech to text code ******************/

  listenForSpeech():void { 
    this.hideDropdownFlag = false;
    this.speech.startListening().subscribe(data => {
      this.speechList = data ;
       if(this.speechList.map(this.toUpper).indexOf('GO BACK') > -1){
       this.goBack();
     }else if(this.speechList.map(this.toUpper).indexOf('EXECUTIVE SUMMARY') > -1 || this.speechList.map(this.toUpper).indexOf('VIEW EXECUTIVE SUMMARY') > -1 ){
       this.viewSummary(this.clickedParameter);
     }else if(this.speechList.map(this.toUpper).indexOf('PORTFOLIO ACTIVITIES') > -1 || this.speechList.map(this.toUpper).indexOf('PORTFOLIO ACCOMPLISHMENTS') > -1 || this.speechList.map(this.toUpper).indexOf('VIEW PORTFOLIO ACTIVITIES') > -1 || this.speechList.map(this.toUpper).indexOf('PORTFOLIO ACCOMPLISHMENTS') > -1 ){
       this.viewPortfolioActivity(this.clickedParameter);
     }else if(this.speechList.map(this.toUpper).indexOf('RISK AND ISSUES') > -1 || this.speechList.map(this.toUpper).indexOf('VIEW RISK AND ISSUES') > -1){
       this.viewRisk();
     }else if(this.speechList.map(this.toUpper).indexOf('BUSINESS VOLUME') > -1 || this.speechList.map(this.toUpper).indexOf('VIEW BUSINESS VOLUME') > -1 ){
       this.viewBusinessVol(this.clickedParameter);
     }else if(this.speechList.map(this.toUpper).indexOf('PORTFOLIO ROADMAP') > -1 || this.speechList.map(this.toUpper).indexOf('VIEW PORTFOLIO ROADMAP') > -1 ){
       this.viewRoadmap(this.clickedParameter);
     }

   });
     }

  toUpper(x):string{
    return x.toUpperCase();
  }

}
