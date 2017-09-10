import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppDetails} from '../app-details/app-details';
import {AppDetailsService} from '../../providers/app-details-service';

/**
 * Generated class for the AppView page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-app-view',
  templateUrl: 'app-view.html',
   providers: [AppDetailsService]
})
export class AppView {
		private data : any;
		private showInformation : boolean = false;
		private parameter1 :string = "";
     private showSpinner:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appDetailsService :  AppDetailsService) {
  	this.showSpinner =true;
  }


    ngOnInit() {
            this.loadAll();
            
    }

    loadAll() {
    	this.appDetailsService.getData().subscribe(result =>{
          this.data = result;
          this.showSpinner =false;
          
         
      });

    }

 viewAppDetails(routeParamId){
   		this.navCtrl.push(AppDetails , {paramPassed : routeParamId});
   	}	

   	 goBack(){
  	this.navCtrl.pop();
  }

}
