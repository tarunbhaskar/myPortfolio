import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service'


/**
 * Generated class for the RoadMapDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-road-map-detail',
  templateUrl: 'road-map-detail.html',
})
export class RoadMapDetail {

	public data : any;
	public parameter1 : any;
  private  errorMessage: string;
    private showSpinner:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams , public dataService : DataService) {
    this.showSpinner = true;
  	this.parameter1 = navParams.get('param');
  }

  ngOnInit() {
           
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
