import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController, NavParams, Content, Events  } from 'ionic-angular';

import { CategoryPage } from '../category/category';
import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { DetailUserPage } from '../detailuser/detailuser';
import { WishlistPage } from '../wishlist/wishlist';
import { ItemdetailPage } from '../itemdetail/itemdetail';
import { RestProvider } from '../../providers/rest/rest';
import { ChatService, ChatMessage, UserInfo } from "../../providers/chat/chat";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  profile : any;
  users : any;
  phone : any;
  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: ElementRef;
  msgList: ChatMessage[] = [];
  user: UserInfo;
  toUser: UserInfo;
  editorMsg = '';
  showEmojiPicker = false;
  friend : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public modalCtrl: ModalController, public restProvider: RestProvider, private storage: Storage,
    private chatService: ChatService,
    private events: Events) {

      this.toUser = {
        id: '210000198410281948',
        name: 'Hancock'
      };
      // Get mock user information
      this.chatService.getUserInfo()
      .then((res) => {
        this.user = res
      });

      this.friend = navParams.get('friend')  
    
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

  onFocus() {
    this.showEmojiPicker = false;
    this.content.resize();
    this.scrollToBottom();
  }

  switchEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    if (!this.showEmojiPicker) {
      this.focus();
    } else {
      this.setTextareaScroll();
    }
    this.content.resize();
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }

  private focus() {
    if (this.messageInput && this.messageInput.nativeElement) {
      this.messageInput.nativeElement.focus();
    }
  }

  private setTextareaScroll() {
    const textarea = this.messageInput.nativeElement;
    textarea.scrollTop = textarea.scrollHeight;
  }

  doRefresh(refresher) {
    this.restProvider.getUsers(this.profile.phone)
    .then(data => {
      this.users = data;
      refresher.complete();
    });
    
 
  }

  ionViewWillLeave() {
    // unsubscribe
    this.events.unsubscribe('chat:received');
  }

  ionViewDidEnter() {
    //get message list
    this.getMsg();

    // Subscribe to received  new message events
    this.events.subscribe('chat:received', msg => {
      this.pushNewMsg(msg);
    })
  }

  getMsg() {
    // Get mock message list
    return this.chatService
      .getMsgList()
      .subscribe(res => {

        this.msgList = res;
        this.scrollToBottom();
      });
  }

  sendMsg() {
    if (!this.editorMsg.trim()) return;

    // Mock message
    const id = Date.now().toString();
    let newMsg: ChatMessage = {
      messageId: Date.now().toString(),
      userId: this.user.id,
      userName: this.user.name,
      userAvatar: this.user.avatar,
      toUserId: this.toUser.id,
      time: Date.now(),
      message: this.editorMsg,
      status: 'pending'
    };

    this.pushNewMsg(newMsg);
    this.editorMsg = '';

    if (!this.showEmojiPicker) {
      this.focus();
    }

    this.chatService.sendMsg(newMsg)
      .then(() => {
        let index = this.getMsgIndexById(id);
        if (index !== -1) {
          this.msgList[index].status = 'success';
        }
      })
  }

  pushNewMsg(msg: ChatMessage) {
    const userId = this.user.id,
      toUserId = this.toUser.id;
    // Verify user relationships
    if (msg.userId === userId && msg.toUserId === toUserId) {
      this.msgList.push(msg);
    } else if (msg.toUserId === userId && msg.userId === toUserId) {
      this.msgList.push(msg);
    }
    this.scrollToBottom();
  }

  getMsgIndexById(id: string) {
    return this.msgList.findIndex(e => e.messageId === id)
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
