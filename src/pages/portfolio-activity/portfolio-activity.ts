import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service'

/**
 * Generated class for the PortfolioActivity page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-portfolio-activity',
  templateUrl: 'portfolio-activity.html',
  providers: [DataService]
})
export class PortfolioActivity {

	private data : any;
	private parameter1 :string = "";
  private  showSpinner:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams , public dataService :  DataService) {
    this.showSpinner = true;
  	this.parameter1 = navParams.get('paramPassed');
  }

   ngOnInit() {
            // Load comments
            this.loadAll();
    }

    loadAll() {
    	this.dataService.getData().then(result =>{
          this.data = result;
          this.showSpinner = false;
      });

    	
    }

  goBack(){
  	this.navCtrl.pop();
  }

}
