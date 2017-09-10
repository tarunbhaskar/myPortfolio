import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortfolioActivity } from './portfolio-activity';

@NgModule({
  declarations: [
    PortfolioActivity,
  ],
  imports: [
    IonicPageModule.forChild(PortfolioActivity),
  ],
  exports: [
    PortfolioActivity
  ]
})
export class PortfolioActivityModule {}
