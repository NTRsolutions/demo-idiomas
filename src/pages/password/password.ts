import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { VerificationPage } from '../verification/verification';

@Component({
  selector: 'page-password ',
  templateUrl: 'password.html'
})
export class PasswordPage {
  phone:any;
  constructor(public navCtrl: NavController, public navParams: NavParams ) {
    this.phone = navParams.get('phone');
  }
  verificationPage(){
    this.navCtrl.push(VerificationPage);
  }

}
