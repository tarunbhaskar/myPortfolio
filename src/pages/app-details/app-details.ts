import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppDetailsService} from '../../providers/app-details-service';

/**
 * Generated class for the AppDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-app-details',
  templateUrl: 'app-details.html',
  providers: [AppDetailsService]
})
export class AppDetails {

		private clickedParameter : string ="";
		private data : any;
		private showInformation : boolean = false;
		private parameter1 :string = "";
     	private showSpinner:boolean = false;
     	private displayAppDetail : any;
       private isExternalFacing:string = "No";
       private showPOC:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams , public appDetailsService :  AppDetailsService) {
  		this.showSpinner =true;
  	this.clickedParameter = navParams.get('paramPassed');

  	if(this.clickedParameter === 'InvestorDirect'){
    		this.clickedParameter = 'Investor Direct';
    	}else if(this.clickedParameter === 'SFMega'){
    		this.clickedParameter = 'SF Mega Disclosure';
    	}else if(this.clickedParameter === 'IRISSC'){
    		this.clickedParameter = 'IRIS-SC';
    	}else if(this.clickedParameter === 'IRISMC'){
    		this.clickedParameter = 'IRIS-MC';
    	}else if(this.clickedParameter === 'MBSTax'){
    		this.clickedParameter = 'MBS Tax';
    	}else if(this.clickedParameter === 'REMICTax'){
    		this.clickedParameter = 'REMIC Tax';
    	};
  }

   ngOnInit() {
            this.loadAll();
            
    }

    loadAll() {
    	this.appDetailsService.getData().subscribe(result =>{
          this.data = result;
          this.showSpinner =false;
          this.showAppDetail(this.data);
          
         
      });

    }

    showAppDetail(data){

    	for(let i=0 ; i< data.length; i++){
    		if(data[i].appName === this.clickedParameter){
    			this.displayAppDetail = data[i];
          this.isExternalFacing = data[i].isExternalFacing;
          this.showPOC = data[i] && data[i].poc !== "" ? true : false;
    		}
    	}

    }

  goBack(){
  	this.navCtrl.pop();
  }

 

}
