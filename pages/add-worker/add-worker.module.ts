import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddWorkerPage } from './add-worker';

@NgModule({
  declarations: [
    AddWorkerPage,
  ],
  imports: [
    IonicPageModule.forChild(AddWorkerPage),
  ],
})
export class AddWorkerPageModule {}
