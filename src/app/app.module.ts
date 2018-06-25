import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AddHerfaPage } from '../pages/add-herfa/add-herfa';
import { AddTownPage } from '../pages/add-town/add-town';
import { AddWorkerPage } from '../pages/add-worker/add-worker';


@NgModule({
  declarations: [
    MyApp,TabsPage,
    AddHerfaPage,
    AddTownPage,
    LoginPage,
    AddWorkerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TabsPage,
    MyApp,
    AddHerfaPage,
    AddTownPage,
    LoginPage,
    AddWorkerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
