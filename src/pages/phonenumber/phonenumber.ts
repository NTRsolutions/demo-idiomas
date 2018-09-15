import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { VerificationPage } from '../verification/verification';

@Component({
  selector: 'page-phonenumber ',
  templateUrl: 'phonenumber.html'
})
export class PhonenumberPage {
  phone:any;
  constructor(public navCtrl: NavController) {

  }
  
    homePage(){
      this.navCtrl.push(HomePage);
    }
    passwordPage(){
      if(this.phone.length <= 3){
        return alert('Enter a valid number')
      }
      this.navCtrl.push(VerificationPage,{
        phone : this.phone
      });
      
    }
}
