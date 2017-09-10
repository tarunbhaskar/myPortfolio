import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RiskService} from '../../providers/risk-service';
import {Search} from '../../pipes/search';


/**
 * Generated class for the Risk page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-risk',
  templateUrl: 'risk.html',
  providers: [RiskService]
})
export class Risk {
		private data : any;
		private term : string = "";
    private errorMessage: string;
    private showSpinner:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams , public riskService : RiskService) {
    this.showSpinner = true;
  	this.loadAll();
  }

    loadAll() {
    	
    	
   this.riskService.getData().subscribe(data => {
           this.data = data;
           error =>  this.errorMessage = <any>error;

           this.showSpinner = false;
            
       });
    }

   /* loadAll() {
    	this.riskService.getData().then(result =>{
          this.data = result;
         
      });

    }*/


   goBack(){
  	this.navCtrl.pop();
  }

   searchFn(ev: any) {
    this.term = ev.target.value;
  }

}
