import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PhonenumberPage } from '../pages/phonenumber/phonenumber';
import { PasswordPage } from '../pages/password/password';
import { VerificationPage } from '../pages/verification/verification';
import { CreateaccountPage } from '../pages/createaccount/createaccount';
import { CategoryPage } from '../pages/category/category';
import { ShirtsPage } from '../pages/shirts/shirts';
import { ItemdetailPage } from '../pages/itemdetail/itemdetail';
import { ShippiningPage } from '../pages/shippining/shippining';
import { PaymentPage } from '../pages/payment/payment';
import { PlacedPage } from '../pages/placed/placed';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { My_accountPage } from '../pages/my_account/my_account';
import { Myorder_1Page } from '../pages/myorder_1/myorder_1';
import { Myorder_2Page } from '../pages/myorder_2/myorder_2';
import { HelpPage } from '../pages/help/help';
import { CartPage } from '../pages/cart/cart';
import { DetailUserPage } from '../pages/detailuser/detailuser';
import { ChatPage } from '../pages/chat/chat';
import { ReviewPage } from '../pages/review/review';
import { ShortPage } from '../pages/short/short';
import { SearchPage } from '../pages/search/search';
import { FilterPage } from '../pages/filter/filter';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { EmojiProvider } from '../providers/emoji/emoji';
import { ChatService } from '../providers/chat/chat';
import { EmojiPickerComponent } from '../components/emoji-picker/emoji-picker';
import { RelativeTimePipe } from '../pipes/relative-time/relative-time';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PhonenumberPage,
    PasswordPage,
    VerificationPage,
    CreateaccountPage,
    CategoryPage,
    ShirtsPage,
    ItemdetailPage,
    ShippiningPage,
    PaymentPage,
    PlacedPage,
    WishlistPage,
    My_accountPage,
    Myorder_1Page,
    Myorder_2Page,
    HelpPage,
    CartPage,
    ChatPage,
    ReviewPage,
    ShortPage,
    SearchPage,
    FilterPage,
    DetailUserPage,
    EmojiPickerComponent,
    RelativeTimePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PhonenumberPage,
    PasswordPage,
    VerificationPage,
    CreateaccountPage,
    CategoryPage,
    ShirtsPage,
    ItemdetailPage,
    ShippiningPage,
    PaymentPage,
    PlacedPage,
    WishlistPage,
    My_accountPage,
    Myorder_1Page,
    Myorder_2Page,
    HelpPage,
    CartPage,
    ChatPage,
    DetailUserPage,
    ReviewPage,
    ShortPage,
    SearchPage,
    FilterPage,
    EmojiPickerComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    EmojiProvider,
    ChatService
  ]
})
export class AppModule {}
