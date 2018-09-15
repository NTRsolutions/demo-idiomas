import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

import { CreateaccountPage } from '../createaccount/createaccount';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-verification ',
  templateUrl: 'verification.html'
})
export class VerificationPage {
  phone:any;
  apiUrl:any;
  profile: any;
  constructor(public navCtrl: NavController ,public navParams: NavParams, public restProvider: RestProvider ) {
    this.phone = navParams.get('phone');
    this.phone = this.phone.replace("+", "")
    this.apiUrl = 'http://165.227.97.137:8282'
  }

  createaccountPage(){

  
    this.restProvider.getUser(this.phone)
    .then(data => {
      this.profile = data;
      if(!this.profile.phone){
        return this.navCtrl.push(CreateaccountPage,{
          phone : this.phone
        });
      }
      
      return this.navCtrl.setRoot(HomePage,{
        profile : this.profile
      });
      
    });   
    

   

    // this.navCtrl.push(CreateaccountPage,{
    //   phone : this.phone
    // });
  }

}
