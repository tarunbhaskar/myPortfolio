import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppDetails } from './app-details';

@NgModule({
  declarations: [
    AppDetails,
  ],
  imports: [
    IonicPageModule.forChild(AppDetails),
  ],
  exports: [
    AppDetails
  ]
})
export class AppDetailsModule {}
