import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController , NavParams} from 'ionic-angular';
import { Structure } from '../structure/structure';
import {PortfolioReportService} from '../../providers/portfolio-report-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PortfolioReportService]
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
	private data : any;
  private errorMessage: string;
  private showSpinner:boolean = false;
    
  constructor(public navCtrl: NavController , public navParams: NavParams,public portfolioReportService : PortfolioReportService , public alertCtrl: AlertController) {
  		this.showSpinner = true;
  }

   ngOnInit() {
            this.loadAll();
    }

    loadAll() {

      this.portfolioReportService.getData().subscribe(data => {
           this.data = data;
           error =>  this.errorMessage = <any>error;

           this.showSpinner = false;

           this.readData(this.data);
            
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

}
