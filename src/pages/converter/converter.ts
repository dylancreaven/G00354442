import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-converter',
  templateUrl: 'converter.html',
})

export class ConverterPage {
 changingFrom:string;
 changingTo:String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConverterPage');
  }
  

  onSave(){
    console.log(this.changingFrom+" "+this.changingTo);

    this.storage.set("changingFrom",this.changingFrom);
    this.storage.set("changingTo",this.changingTo);
    }
    ionViewWillEnter(){
      this.storage.get("changingFrom").then((data) => {
          this.changingFrom=data;
      })
        .catch((err) => {
          console.log("Error = " + err);
        })


        this.storage.get("changingTo").then((data) => {
          this.changingTo=data;
      })
        .catch((err) => {
          console.log("Error = " + err);
        })
  
    }



}

