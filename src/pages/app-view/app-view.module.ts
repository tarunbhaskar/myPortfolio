import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppView } from './app-view';

@NgModule({
  declarations: [
    AppView,
  ],
  imports: [
    IonicPageModule.forChild(AppView),
  ],
  exports: [
    AppView
  ]
})
export class AppViewModule {}
