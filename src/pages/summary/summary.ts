import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
import {AppView} from '../app-view/app-view';
import {AppDetailsService} from '../../providers/app-details-service';

/**
 * Generated class for the Summary page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
  providers: [DataService, AppDetailsService]
})
export class Summary {
		private data : any;
		private showInformation : boolean = false;
		private parameter1 :string = "";
     private showSpinner:boolean = false;
     private appDetailsData : any;

  constructor(public navCtrl: NavController, public navParams: NavParams , public dataService :  DataService , public appDetailsService : AppDetailsService) {
    this.showSpinner =true;
  	this.showInformation = false;
  	this.parameter1 = navParams.get('paramPassed');
  }

    ngOnInit() {
            this.loadAll();
            this.loadAppDetail();
            
    }

    loadAll() {
    	this.dataService.getData().then(result =>{
          this.data = result;
          this.showSpinner =false;
          
         
      });

    }

     loadAppDetail() {
      this.appDetailsService.getData().subscribe(result =>{
          this.appDetailsData = result;
          
         
      });

    }





   showInfo(){
  		this.showInformation = !this.showInformation;
  }

   	 goBack(){
  	this.navCtrl.pop();
  }

    routeToViewApp(){
       this.navCtrl.push(AppView);
     }



}
