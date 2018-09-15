import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-cart ',
  templateUrl: 'cart.html'
})
export class CartPage {
  emoji : any;
  families : any;
  levels : any;
  quiz : any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public restProvider: RestProvider) {
    this.emoji = navParams.get('emoji')
    console.log(this.emoji)

    this.restProvider.getFamilies()
    .then(data => {
      this.families = data;
    });

    this.restProvider.getLevels()
    .then(data => {
      this.levels = data;
    });
  }
  
  setFamily() {
    
  }  
  dismiss() {
    this.viewCtrl.dismiss();
  }  
}
