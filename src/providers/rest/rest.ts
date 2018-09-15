import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



@Injectable()
export class RestProvider {
  apiUrl = 'http://165.227.97.137:8282';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getUser(phone) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/profile?phone='+ phone).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getUsers(phone) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/profile-list?phone='+ phone).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  saveUser(data) {
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/profile', JSON.stringify(data), 
      {headers : {'Content-Type':'application/json; charset=utf-8'}})
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
  }


  getEmojis(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/emojis-list').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getFamilies(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/families').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getLevels(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/levels').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}