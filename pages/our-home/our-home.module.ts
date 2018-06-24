import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OurHomePage } from './our-home';

@NgModule({
  declarations: [
    OurHomePage,
  ],
  imports: [
    IonicPageModule.forChild(OurHomePage),
  ],
})
export class OurHomePageModule {}
