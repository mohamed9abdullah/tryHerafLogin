import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';

/**
 * Generated class for the OurHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-our-home',
  templateUrl: 'our-home.html',
})
export class OurHomePage {


  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  Users=[];
  dbReference=firebase.database().ref("Users/");
  constructor(public navCtrl: NavController, public navParams: NavParams) {


  
    
     this.Users=[];
     this.dbReference.on('value',response=>{
     this.Users=this.UsersToArray(response);
      
      console.log(this.Users);
    });

    
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    /*this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];

  
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
  }

    itemTapped(event, item) {
          /*debugger;

          //Delete from Array
          let index=this.Users.indexOf(item);
          this.Users.splice(index,1);


          //Update from Firebase
          firebase.database().ref("Users/"+item.key).set({

          FullName:"Updated One",
          Faculty:"CS"

          });

          //Delete From firebase
          this.dbReference.child(item.key).remove();


          https://firebase.google.com/docs/database/web/read-and-write
          */
          //That's right, we're pushing to ourselves!

         /* firebase.database().ref("MyHeraf/").push({

            Faculty: "CS"
     , FullName: "I'm new2"
      ,Gender:  "Male"
      
          });
          firebase.database().ref("MyHeraf/").push({

            Faculty: "CS"
     , FullName: "I'm new3"
      ,Gender:  "Male"
      
          });
          firebase.database().ref("MyHeraf/").push({

            Faculty: "CS"
     , FullName: "I'm new4"
      ,Gender:  "Male"
      
          });*/
                this.navCtrl.push(OurHomePage, {
                  item: item
                });
  }

  UsersToArray(UsersData) {
    let returnArr = [];

    UsersData.forEach(childUser => {
        let item = childUser.val();
        item.key = childUser.key;
        returnArr.push(item);
    });

    return returnArr;
  }

  ionViewWillEnter(){

  }
  ionViewDidLoad() {
   
  }
}