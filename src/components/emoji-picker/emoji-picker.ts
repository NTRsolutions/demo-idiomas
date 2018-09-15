import { Component, forwardRef } from '@angular/core';
import { EmojiProvider } from "../../providers/emoji/emoji";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { RestProvider } from '../../providers/rest/rest';
import {  ModalController  } from 'ionic-angular';
import { DetailUserPage } from '../../pages/detailuser/detailuser';
import { CartPage } from '../../pages/cart/cart';

export const EMOJI_PICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EmojiPickerComponent),
  multi: true
};

@Component({
  selector: 'emoji-picker',
  providers: [EMOJI_PICKER_VALUE_ACCESSOR],
  templateUrl: './emoji-picker.html',
  // styleUrls: ['./emoji-picker.css']
})
export class EmojiPickerComponent implements ControlValueAccessor {

  emojiArr : any;

  _content: string;
  _onChanged: Function;
  _onTouched: Function;

  constructor(emojiProvider: EmojiProvider, public restProvider: RestProvider, public modalCtrl: ModalController) {

    this.restProvider.getEmojis()
    .then(data => {

      var result = Object.keys(data).map(function(key) {
        return [Number(key), data[key]];
      });

      const groupNum = Math.ceil(result.length / (6));
      const items = [];

      for (let i = 0; i < groupNum; i++) {
        items.push(result.slice(i * 6, (i + 1) * 6));
      }
      this.emojiArr = items;
      console.log(this.emojiArr)
    });

    
    
  }

  writeValue(obj: any): void {
    this._content = obj;
  }

  registerOnChange(fn: any): void {
    this._onChanged = fn;
    this.setValue(this._content);
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  private setValue(val: any): any {
    
    
    this._content += val;
    if (this._content) {
      let modal = this.modalCtrl.create(CartPage,{
        emoji : val
      });
      modal.present();
    
      // this._onChanged(this._content)
    }
  }
}
