import { Component } from '@angular/core';
import { NavController, ModalController, NavParams  } from 'ionic-angular';

import { CategoryPage } from '../category/category';
import { ChatPage } from '../chat/chat';
import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { DetailUserPage } from '../detailuser/detailuser';
import { WishlistPage } from '../wishlist/wishlist';
import { ItemdetailPage } from '../itemdetail/itemdetail';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  profile : any;
  users : any;
  phone : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public modalCtrl: ModalController, public restProvider: RestProvider, private storage: Storage) {

    
    if(navParams.get('profile')){
      this.profile = navParams.get('profile')
      storage.set('profile', JSON.stringify(this.profile));
      
      this.restProvider.getUsers(this.profile.phone)
      .then(data => {
        this.users = data;
      });
    }else{
      storage.get('profile').then((val) => {
        
        this.profile = JSON.parse(val);

        this.restProvider.getUsers(this.profile.phone)
        .then(data => {
          this.users = data;
        });
      });
    }

    
    
    
  }

  doRefresh(refresher) {
    this.restProvider.getUsers(this.profile.phone)
    .then(data => {
      this.users = data;
      refresher.complete();
    });
    
 
  }

  goChat(person){
    this.navCtrl.push(ChatPage,{
      friend : person
    });
  }
  
  detailUser() {
    let modal = this.modalCtrl.create(DetailUserPage);
    modal.present();
  }

  
   categoryPage(){
    this.navCtrl.push(CategoryPage);
    }
    wishlistPage(){
    this.navCtrl.push(WishlistPage);
    }
    
    searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }
  
   cartPage() {
    let modal = this.modalCtrl.create(CartPage);
    modal.present();
  }
  
    itemdetailPage() {
    this.navCtrl.push(ItemdetailPage);
  }

}
