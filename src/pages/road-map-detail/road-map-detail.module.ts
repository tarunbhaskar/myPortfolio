import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoadMapDetail } from './road-map-detail';

@NgModule({
  declarations: [
    RoadMapDetail,
  ],
  imports: [
    IonicPageModule.forChild(RoadMapDetail),
  ],
  exports: [
    RoadMapDetail
  ]
})
export class RoadMapDetailModule {}
