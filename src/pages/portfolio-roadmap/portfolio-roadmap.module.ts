import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortfolioRoadmap } from './portfolio-roadmap';

@NgModule({
  declarations: [
    PortfolioRoadmap,
  ],
  imports: [
    IonicPageModule.forChild(PortfolioRoadmap),
  ],
  exports: [
    PortfolioRoadmap
  ]
})
export class PortfolioRoadmapModule {}
