import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
import {PassDataService} from '../../providers/pass-data-service';

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
  providers: [DataService, PassDataService]
})
export class PortfolioActivity {

	private data : any;
	private parameter1 :string = "";
  private  showSpinner:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams , public dataService :  DataService , public passDataService : PassDataService) {
    this.showSpinner = true;
  	this.parameter1 = navParams.get('paramPassed');
   // this.data = this.passDataService.getDataDetail();
  }

  ngOnInit(){
    this.data = this.passDataService.getDataDetail();
  }

   ngAfterViewInit() {
            // Load comments
            this.loadAll();
           // this.data = this.passDataService.getDataDetail();
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
