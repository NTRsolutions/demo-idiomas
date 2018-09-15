import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-detailuser ',
  templateUrl: 'detailuser.html'
})
export class DetailUserPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }  
}
