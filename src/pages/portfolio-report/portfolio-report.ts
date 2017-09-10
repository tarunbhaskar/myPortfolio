import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PortfolioReportService} from '../../providers/portfolio-report-service';

@IonicPage()
@Component({
  selector: 'page-portfolio-report',
  templateUrl: 'portfolio-report.html',
  providers: [PortfolioReportService]
})
export class PortfolioReport {

	private parameter1 :string = "";
	private data : any;

	private chartoptionsTram : any;
	private chartoptionsMul : any;
	private chartoptionsTickets : any;
	private arr  = [9, 22, 39,21];
	//private list_TRAM_finding_val : number [] = [];
	private arr1 = [];

  constructor(public navCtrl: NavController, public navParams: NavParams , public portfolioReportService : PortfolioReportService) {

  	this.parameter1 = navParams.get('paramPassed');
  }

    ngOnInit() {
            this.loadAll();
    }

    loadAll() {
    	this.portfolioReportService.getData().then(result =>{
          this.data = result;
          this.readData(this.data);

         
      });

    }

    readData(data){

    	for(let i = 0 ; i<  data.length-1 ; i++){
       		this.arr1.push(parseInt(data[i].tram.Observation));
          }
          console.log("this.array" + this.arr1);

          this.displayChart();

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
            categories: ['Investor Reporting', 'Disclosures', 'Asset Servicing' , 'Structured Transaction']
        },
        yAxis: {
            title: {
                text: 'Observation'
            }
        },
        series: [{
            name: 'Observation',
            data: [9, 22, 39,21]
        }, {
            name: 'Finding',
            data: this.arr1
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
            data: this.arr
        }, {
            name: 'Completed',
            data: [2, 13, 14 , 6]
        },
        {
            name: 'Review',
            data: [2, 13, 14 , 6]
        }]
  	};
  };


  goBack(){
  	this.navCtrl.pop();
  }

}
