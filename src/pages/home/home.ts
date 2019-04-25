import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToRates(){//go to the converter page with the rates and currency converter
    this.navCtrl.push("ConverterPage");

  }

}
