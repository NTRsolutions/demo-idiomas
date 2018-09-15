import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

import { HomePage } from '../home/home';
@Component({
  selector: 'page-createaccount',
  templateUrl: 'createaccount.html'
})
export class CreateaccountPage {
  phone:any;
  name:any;
  email:any;
  college:any;
  level:any;
  group:any;
  profile:any
  constructor(public navCtrl: NavController , public navParams: NavParams, public restProvider: RestProvider) {
    this.phone = navParams.get('phone');
  }
  
  homePage(){
    this.restProvider.saveUser({
      phone:this.phone,
      name:this.name,
      email:this.email,
      college:this.college,
      level:this.level,
      group:this.group,
      profile:this.profile
    })
    .then(data => {
      this.profile = data;
           
      return this.navCtrl.setRoot(HomePage,{
        profile : this.profile
      });
      
    }); 

    
  }

}
