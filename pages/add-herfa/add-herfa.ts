import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';

/**
 * Generated class for the AddHerfaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-herfa',
  templateUrl: 'add-herfa.html',
})
export class AddHerfaPage {

  FullName:string="";

constructor(public navCtrl: NavController,public alertCtrl:AlertController) {

}

onRegisterClick(){

  firebase.database().ref("handcrafts/").push({

    FullName:this.FullName
  });
 

  let alert=this.alertCtrl.create({
                                   
    title:"Successfully Operation",
    buttons:["OK"],
    subTitle:`${this.FullName}  is registered Successfully`,
    message:""
  });
  alert.present();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHerfaPage');
  }

}
