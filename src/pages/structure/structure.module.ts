import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Structure } from './structure';

@NgModule({
  declarations: [
    Structure,
  ],
  imports: [
    IonicPageModule.forChild(Structure),
  ],
  exports: [
    Structure
  ]
})
export class StructureModule {}
