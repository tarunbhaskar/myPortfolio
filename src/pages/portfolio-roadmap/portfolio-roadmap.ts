import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
import {NgCalendarModule} from 'ionic2-calendar';
import {RoadMapDetail} from '../../pages/road-map-detail/road-map-detail';
import {PassDataService} from '../../providers/pass-data-service';

/**
 * Generated class for the PortfolioRoadmap page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-portfolio-roadmap',
  templateUrl: 'portfolio-roadmap.html',
  providers: [DataService , PassDataService]
})
export class PortfolioRoadmap {

	private data : any;
		private showInformation : boolean = false;
		private parameter1 :string = "";
    private  showSpinner:boolean = false;
    private showQuaterResult: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams , public dataService :  DataService , public passDataService : PassDataService) {
    this.showSpinner = true;
  	this.showInformation = false;
  	this.parameter1 = navParams.get('paramPassed');
  	console.log('this.parameter1' + this.parameter1);
  }

     ngOnInit() {

     this.showQuaterResult = 'Q1';
           this.loadAll();

       //  this.data = this.passDataService.getDataDetail();
    }

    loadAll() {
    	this.dataService.getData().then(result =>{
          this.data = result;
          this.showSpinner = false;
         
      });

    }



   showInfo(){
  		this.showInformation = !this.showInformation;
  }

   	 goBack(){
  	this.navCtrl.pop();
  }

  showOctTimeLine(result){

  	this.navCtrl.push(RoadMapDetail , {param : result});	

  }

  displayQuaterRoadMap(quater){


    if(quater === 'Q1'){
      this.showQuaterResult = 'Q1';
    }else if(quater === 'Q2'){
       this.showQuaterResult = 'Q2';
    }
    else if(quater === 'Q3'){
       this.showQuaterResult = 'Q3';
    }
    else if(quater === 'Q4'){
       this.showQuaterResult = 'Q4';
    }else if(quater === 'Q5'){
       this.showQuaterResult = 'Q5';
    }else if(quater === 'Q6'){
       this.showQuaterResult = 'Q6';
    }else if(quater === 'Q7'){
       this.showQuaterResult = 'Q7';
    }else if(quater === 'Q8'){
       this.showQuaterResult = 'Q8';
    }

  }

   

  

}
