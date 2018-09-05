import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController,NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';

/**
 * Generated class for the AddTownPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-town',
  templateUrl: 'add-town.html',
})
export class AddTownPage {
FullName:string="";
ImgURL:string="";

TownsList:any=[];

constructor(public navCtrl: NavController,public alertCtrl:AlertController) {
    
  firebase.database().ref("towns/").on('value',response=>{
     
    this.TownsList=this.DataToArray1(response);

 });
}

onRegisterClick(){

  firebase.database().ref("towns/").push({

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

DeleteItem(event,town){
  debugger;

  firebase.database().ref("towns/").child(town.key).remove();

}

EditItem(event,town){

  debugger;
  //firebase.database().ref("towns/").child(town.key).remove();

}
DataToArray1(AllData) {
  let returnArr = [];

  AllData.forEach(childData => {
      let item = childData.val();
      item.key = childData.key;
      returnArr.push(item);
  });

  return returnArr;
}

ionViewDidLoad() {
  console.log('ionViewDidLoad AddTownPage');
}

}



  


  
