import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Risk } from './risk';

@NgModule({
  declarations: [
    Risk,
  ],
  imports: [
    IonicPageModule.forChild(Risk),
  ],
  exports: [
    Risk
  ]
})
export class RiskModule {}
