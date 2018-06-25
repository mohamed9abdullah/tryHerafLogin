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
  ImgURL:string="";
  HandCraftsList:any=[];

constructor(public navCtrl: NavController,public alertCtrl:AlertController) {

  firebase.database().ref("/").on('value',response=>{
     
    this.HandCraftsList=this.DataToArray2(response);

 });
}

  onRegisterClick(){

    firebase.database().ref("/").push({

      FullName:this.FullName,
      ImgURL:this.ImgURL

    });
  

    let alert=this.alertCtrl.create({
                                    
      title:"Successfully Operation",
      buttons:["OK"],
      subTitle:`${this.FullName}  is registered Successfully`,
      message:""
    });
    alert.present();
  }

  DeleteItem(event,herfa){
    //debugger;

    firebase.database().ref("/").child(herfa.key).remove();

  }

  EditItem(event,herfa){

  // debugger;
    //firebase.database().ref("/").child(town.key).remove();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHerfaPage');
  }

  
  DataToArray2(AllData) {
    let returnArr = [];

    AllData.forEach(childData => {
        let item = childData.val();
        item.key = childData.key;
        returnArr.push(item);
    });

    return returnArr;
  }

}
