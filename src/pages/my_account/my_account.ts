import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-my_account ',
  templateUrl: 'my_account.html'
})
export class My_accountPage {
 account: string = "profile";
 profile : any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private storage: Storage) {
    this.storage.get('profile').then((val) => {
        
      this.profile = JSON.parse(val);

      console.log(this.profile)
    });
  }
  
    searchPage() {
      let modal = this.modalCtrl.create(SearchPage);
      modal.present();
    }
  
  
    cartPage() {
      let modal = this.modalCtrl.create(CartPage);
      modal.present();
    }

}
