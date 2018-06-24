import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTownPage } from './add-town';

@NgModule({
  declarations: [
    AddTownPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTownPage),
  ],
})
export class AddTownPageModule {}
