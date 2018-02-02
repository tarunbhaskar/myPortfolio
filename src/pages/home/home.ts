import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController , NavParams} from 'ionic-angular';
import { Structure } from '../structure/structure';
import {PortfolioReportService} from '../../providers/portfolio-report-service';
import {SpeechRecognition} from '@ionic-native/speech-recognition';
import {BudgetService} from '../../providers/budget-service';
import {AppDetailsService} from '../../providers/app-details-service';
import {DataService} from '../../providers/data-service';
import {PassDataService} from '../../providers/pass-data-service';
import {RiskService} from '../../providers/risk-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PortfolioReportService, BudgetService, AppDetailsService,DataService , PassDataService, RiskService ]
})
export class HomePage {
	private chartoptionsTram : any;
	private chartoptionsMul : any;
	private chartoptionsTickets : any;
	private list_TRAM_observation = [];
  private list_TRAM_finding = [];
  private ticket_closed = [];
  private ticket_completed=[];
  private ticket_review = [];
	private data1 : any;
    private data2 : any;
  private errorMessage: string;
  private showSpinner:boolean = false;
  private speechList : Array<string> = [];
  private languagesList: Array<string>= [];
  private permissionThere: boolean;
  private isAvailableAndroid: boolean;
  private hideDropdownFlag: boolean = false;
  private appDetailsData: any;
  private data3 : any;
    private data4 : any;
    private data:any;
    
  constructor(private speech: SpeechRecognition  , public navCtrl: NavController , public navParams: NavParams,
    public portfolioReportService : PortfolioReportService , public alertCtrl: AlertController, 
    public budgetService :  BudgetService, public dataService :  DataService , public appDetailsService : AppDetailsService , public passDataService : PassDataService, public riskService : RiskService) {
  		this.showSpinner = true;
  }

   ngOnInit() {
            this.loadAll();
          //  this.loadBudgetAll();
          //  this.loadDataAll();
          //  this.loadAppDetail();
          //  this.loadRiskAll();
    }

    loadAll() {

      this.portfolioReportService.getData().subscribe(data => {
          this.data = data;
           error =>  this.errorMessage = <any>error;

           this.showSpinner = false;

           this.readData(this.data);
            
       });

    }


     loadRiskAll() {
      
      
   this.riskService.getData().subscribe(data => {
           this.data2 = data;
           error =>  this.errorMessage = <any>error;

           this.showSpinner = false;

           this.passDataService.setRiskDetail(this.data2);
            
       });
    }


      loadBudgetAll() {
      this.budgetService.getData().subscribe(result =>{
          this.data3 = result;
           this.showSpinner = false;
          //  this.readData(this.data);

          this.passDataService.setBudgetDetail(this.data3);
         
      });

    }


      loadDataAll() {
      this.dataService.getData().then(result =>{
          this.data4= result;
          this.showSpinner =false;

          this.passDataService.setDataDetail(this.data4);
          
         
      });

    }

     loadAppDetail() {
      this.appDetailsService.getData().subscribe(result =>{
          this.appDetailsData = result;

          this.passDataService.setAppDetail(this.appDetailsData);
          
         
      });

    }

    readData(data){

    for(let i = 0 ; i< data.length ; i++){
       		this.list_TRAM_finding.push(parseInt(data[i]['tram/finding']));
           this.list_TRAM_observation.push(parseInt(data[i]['tram/Observation']));
           this.ticket_closed.push(parseInt(data[i]['tickets/closed']));
           this.ticket_completed.push(parseInt(data[i]['tickets/completed']));
           this.ticket_review.push(parseInt(data[i]['tickets/review']));
          }
          console.log(data);
          console.log(this.list_TRAM_finding);
          console.log(this.list_TRAM_observation);


          this.displayChart();

    }

  viewDetails(id){
  	this.navCtrl.push(Structure , {param : id});	
  } 

      displayChart(){

    	  	this.chartoptionsTram = {
  		 chart: {
            type: 'bar',
            zoomType: 'x',
            width: 350

        },

        title: {
            text: 'Application Security Finding'
        },
        xAxis: {
            categories: ['Structured Transaction', 'Asset Servicing', 'Issuance/Disclosures' , 'Investor Reporting']
        },
        yAxis: {
            title: {
                text: 'Observation'
            }
        },
        series: [{
            name: 'Observation',
            data: this.list_TRAM_observation
        }, {
            name: 'Finding',
            data: this.list_TRAM_finding
        }]
  	};

  	 	this.chartoptionsMul = {
  		 chart: {
            type: 'column',
            zoomType: 'x',
            width: 350
        },
        title: {
            text: 'Mandatory Upgrade List'
        },
        xAxis: {
            categories: ['ST', 'AS', 'Dis' , 'IR']
        },
        yAxis: {
            title: {
                text: 'Observation'
            }
        },
        series: [{
            name: 'Accept Risk',
            data: [9, 22, 39,21]
        }, {
            name: 'Remediate',
            data: [2, 13, 14 , 6]
        }]
  	};

  	 	this.chartoptionsTickets = {
  		 chart: {
            type: 'column',
            zoomType: 'x',
            width: 350,
            backgroundColor: '#b9c8e7'
        },
        title: {
            text: 'Ticket Status'
        },
        xAxis: {
            categories: ['ST', 'AS', 'Dis' , 'IR']
        },
        yAxis: {
            title: {
                text: 'Observation'
            }
        },
        series: [{
            name: 'Closed',
            data: this.ticket_closed
        }, {
            name: 'Completed',
            data: this.ticket_completed
        },
        {
            name: 'Review',
            data: this.ticket_review
        }]
  	};
  };


   showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Status',
      subTitle: 'Issues reported in App.Please refer notification section for furthur details!',
      buttons: ['OK']
    });
    alert.present();
  }

  /**********speech to text code ******************/

  listenForSpeech():void { 
    this.hideDropdownFlag = false;
    this.speech.startListening().subscribe(data => {
      this.speechList = data ;
       if(this.speechList.map(this.toUpper).indexOf('STRUCTURE TRANSACTION') > -1 || this.speechList.map(this.toUpper).indexOf('STRUCTURED TRANSACTION') > -1 || this.speechList.map(this.toUpper).indexOf('VIEW STRUCTURED TRANSACTION') > -1){
       this.viewDetails('dir1');
     }else if(this.speechList.map(this.toUpper).indexOf('MASTER SERVICING') > -1 || this.speechList.map(this.toUpper).indexOf('ASSET SERVICING') > -1 || this.speechList.map(this.toUpper).indexOf('VIEW MASTER SERVICING') > -1 || this.speechList.map(this.toUpper).indexOf('VIEW ASSET SERVICING') > -1){
       this.viewDetails('dir2');
     }else if(this.speechList.map(this.toUpper).indexOf('POOLING') > -1 || this.speechList.map(this.toUpper).indexOf('DISCLOSURE') > -1 || this.speechList.map(this.toUpper).indexOf('VIEW POOLING') > -1 || this.speechList.map(this.toUpper).indexOf('VIEW DISCLOSURE') > -1 ){
       this.viewDetails('dir3');
     }else if(this.speechList.map(this.toUpper).indexOf('INVESTOR REPORTING') > -1 || this.speechList.map(this.toUpper).indexOf('VIEW INVESTOR REPORTING') > -1){
       this.viewDetails('dir4');
     }

   });
     }


  async getSupportedLanguages(): Promise<Array<string>>{
    try{
    const languages = await this.speech.getSupportedLanguages();
    this.languagesList = languages;
    return languages;
    }catch(e){
      console.log(e);
    }
  }

  async getPermission(): Promise<void>{
    try{
    const permission = await this.speech.requestPermission();
    console.log(permission);
    return permission;
    }catch(e){
      console.log(e);
    }
  }

  async hasPermission(): Promise<boolean>{
    try{
    const permission = await this.speech.hasPermission();
    this.permissionThere = permission;
    alert("permission"+ permission);
    return permission;
    }catch(e){
      console.log(e);
    }
  }

  async isSpeechSupported() : Promise<boolean>{
    const isAvailable =  await  this.speech.isRecognitionAvailable();
    this.isAvailableAndroid = isAvailable;
     alert("isSpeechSupported"+ this.isAvailableAndroid);
    return isAvailable;
  }

  hideDropdown():void{
    this.hideDropdownFlag = true;
  }

  toUpper(x):string{
    return x.toUpperCase();
  }

}
