import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    const config = {
      apiKey: "AIzaSyC7vBerVmOkgU07rPTyBLfe3k9WKg9eQEg",
      authDomain: "herafy-87392.firebaseapp.com",
      databaseURL: "https://herafy-87392.firebaseio.com",
      projectId: "herafy-87392",
      storageBucket: "herafy-87392.appspot.com",
      messagingSenderId: "729922009979"
    };
    firebase.initializeApp(config);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
  }
}
