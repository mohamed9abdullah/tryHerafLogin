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
  WorkersList:any=[];

  constructor(public navCtrl: NavController,public alertCtrl:AlertController) {
   
   firebase.database().ref("").on('value',response=>{
     
      this.TownsList=this.DataToArray3(response);

   });
   firebase.database().ref("/").on('value',response=>{
     
    this.HandCraftsList=this.DataToArray3(response);

 });

 firebase.database().ref("/").on('value',response=>{
     
  this.WorkersList=this.DataToArray3(response);

});
  }


  onRegisterClick(){

    firebase.database().ref("").push({

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


  DeleteItem(event,worker){
    //debugger;

    firebase.database().ref("/").child(worker.key).remove();

  }

  EditItem(event,worker){

  // debugger;
    //firebase.database().ref("/").child(town.key).remove();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWorkerPage');
  }

  DataToArray3(AllData) {
    let returnArr = [];

    AllData.forEach(childData => {
        let item = childData.val();
        item.key = childData.key;
        returnArr.push(item);
    });

    return returnArr;
  }

}
