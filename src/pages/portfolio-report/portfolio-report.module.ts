import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortfolioReport } from './portfolio-report';

@NgModule({
  declarations: [
    PortfolioReport,
  ],
  imports: [
    IonicPageModule.forChild(PortfolioReport),
  ],
  exports: [
    PortfolioReport
  ]
})
export class PortfolioReportModule {}
