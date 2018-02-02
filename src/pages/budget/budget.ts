import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BudgetService} from '../../providers/budget-service';
import {PassDataService} from '../../providers/pass-data-service';

/**
 * Generated class for the Budget page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html',
  providers: [BudgetService , PassDataService]
})
export class Budget {

	    private data : any;
		private parameter1 :string = "";
    private showSpinner:boolean = false;
    private chartoptionsTram : any;
      private list_quantity = [];
  private list_Volume= [];


  constructor(public navCtrl: NavController, public navParams: NavParams , public budgetService :  BudgetService , public passDataService: PassDataService) {
    this.showSpinner = true;
  	this.parameter1 = navParams.get('paramPassed');
  	console.log('this.parameter1' + this.parameter1);
  	
  }

  ngOnInit() {
            this.loadAll();
        //  this.readData(this.passDataService.getBudgetDetail());
    }

    loadAll() {
    	this.budgetService.getData().subscribe(result =>{
          this.data = result;
           this.showSpinner = false;
            this.readData(this.data);
         
      });

    }

     readData(data){

     for(let i = 0 ; i< data.length ; i++){
           this.list_quantity.push(parseInt(data[i]['Quantity']));
           this.list_Volume.push(parseInt(data[i]['Volume']));
          }


          this.displayChart();

    }

     displayChart(){

          this.chartoptionsTram = {
       chart: {
            type: 'bar',
            zoomType: 'y',
            width: 350

        },

        title: {
            text: 'Structured Transactions Volume'
        },
        xAxis: {
            categories: ['REMICS', 'MEGAs']
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        series: [{
            name: 'Quantity',
            data: this.list_quantity
        }, {
            name: 'Volume',
            data: this.list_Volume
        }]
    };


  };

   	 goBack(){
  	this.navCtrl.pop();
  }


  

}
