import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import {ChartModule} from 'angular2-highcharts';
import * as highcharts from 'Highcharts';
import {NgCalendarModule} from 'ionic2-calendar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Structure} from '../pages/structure/structure';
import {Summary} from '../pages/summary/summary';
import {PortfolioActivity} from '../pages/portfolio-activity/portfolio-activity';
import {PortfolioReport} from '../pages/portfolio-report/portfolio-report';
import {Risk} from '../pages/risk/risk';
import {AppDetails} from '../pages/app-details/app-details';
import {Budget} from '../pages/budget/budget';
import {PortfolioRoadmap} from '../pages/portfolio-roadmap/portfolio-roadmap';
import {RoadMapDetail} from '../pages/road-map-detail/road-map-detail';
import {AppView} from '../pages/app-view/app-view';
import {DataService} from '../providers/data-service';
import {RiskService} from '../providers/risk-service';
import {PortfolioReportService} from '../providers/portfolio-report-service';
import {Search} from '../pipes/search';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Structure,
    Summary,
    PortfolioActivity,
    PortfolioReport,
    Risk,
    AppView,
    RoadMapDetail,
    AppDetails,
    Budget,
    PortfolioRoadmap,
    Search
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp), ChartModule.forRoot(highcharts),
    NgCalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Structure,
    Summary,
    PortfolioActivity,
    PortfolioReport,
    Risk,
    AppView,
    RoadMapDetail,
    AppDetails,
    Budget,
    PortfolioRoadmap
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService,
    RiskService,
    PortfolioReportService

  ]
})
export class AppModule {}
