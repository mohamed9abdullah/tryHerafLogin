import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';

/**
 * Generated class for the AddWorkerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-worker',
  templateUrl: 'add-worker.html',
})
export class AddWorkerPage {

  FullName:string="";
  Password:string="";
  ImgURL:string="";
  Phone:string="";
  HerfaName:string="";
  TownName:string="";
  DateOfBirth:string="";
  TownsList:any=[];
  HandCraftsList:any=[];
  constructor(public navCtrl: NavController,public alertCtrl:AlertController) {
   
   firebase.database().ref("towns/").on('value',response=>{
     
      this.TownsList=this.DataToArray(response);

   });
   firebase.database().ref("handcrafts/").on('value',response=>{
     
    this.HandCraftsList=this.DataToArray(response);

 });
  }


  onRegisterClick(){

    firebase.database().ref("users").push({

      FullName:this.FullName,
      Password:this.Password,
      ImgURL:this.ImgURL,
      Phone:this.Phone,
      DateOfBirth:this.DateOfBirth,
      HerfaName:this.HerfaName,
      TownName:this.TownName
    });
   

    let alert=this.alertCtrl.create({
                                     
      title:"Successfully Operation",
      buttons:["OK"],
      subTitle:`${this.FullName} is registered Successfull`,
      message:""
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWorkerPage');
  }

  DataToArray(AllData) {
    let returnArr = [];

    AllData.forEach(childData => {
        let item = childData.val();
        item.key = childData.key;
        returnArr.push(item);
    });

    return returnArr;
  }

}
