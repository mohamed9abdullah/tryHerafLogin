import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  FullName:string="";Password:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  onLoginClick(){

    if(this.FullName=="Mostafa" && this.Password=="123")
    this.navCtrl.push(TabsPage);
 
 else{
   
   let alert=this.alertCtrl.create({
                                     
             title:"Login Failed",
             buttons:["OK"],
             subTitle:"This user doesn'y exist please try again",
             message:"Name:Mostafa,,,Password:123"
   });
   alert.present();

    }
  }
}
