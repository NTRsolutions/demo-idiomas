import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

  import { HomePage } from '../pages/home/home';
  import { PhonenumberPage } from '../pages/phonenumber/phonenumber';
  import { CategoryPage } from '../pages/category/category';
  import { WishlistPage } from '../pages/wishlist/wishlist';
  import { My_accountPage } from '../pages/my_account/my_account';
  import { Myorder_1Page } from '../pages/myorder_1/myorder_1';
  import { Myorder_2Page } from '../pages/myorder_2/myorder_2';
  import { HelpPage } from '../pages/help/help';
  import { CartPage } from '../pages/cart/cart';
  import { ReviewPage } from '../pages/review/review'; 
  import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PhonenumberPage;
  pages: Array<{title: string, component: any}>;
  profile : any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage) {
    this.initializeApp();

    

    // used for an example of ngFor and navigation
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.storage.get('profile').then((val) => {
        
        this.profile = JSON.parse(val);
  
        console.log(this.profile)
      });
    });
  }

  loadProfile(){
    
  }
  
  myorder_1Page() {
    this.nav.setRoot(Myorder_1Page);
  }
  myorder_2Page() {
    this.nav.setRoot(Myorder_2Page);
  }
  
  my_accountPage() {
    this.nav.setRoot(My_accountPage);
  }
  
   categoryPage() {
    this.nav.setRoot(CategoryPage);
  }
  
   homePage() {
    this.nav.setRoot(HomePage);
  }
  
  reviewPage() {
    this.nav.setRoot(ReviewPage);
  }
  
  wishlistPage() {
    this.nav.setRoot(WishlistPage);
  }
  
  cartPage() {
    this.nav.setRoot(CartPage);
  }
  
  helpPage() {
    this.nav.setRoot(HelpPage);
  }
  
  phonenumberPage() {
    this.nav.setRoot(PhonenumberPage);
  }
}
