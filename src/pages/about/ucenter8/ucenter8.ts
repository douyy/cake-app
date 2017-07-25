import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the Ucenter8Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ucenter8',
  templateUrl: 'ucenter8.html',
})
export class Ucenter8Page {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:Http
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ucenter8Page');
  }

  submit(dtel,stel){
    return this.http.post( 'http://localhost:3000/s/userphone', {phone1:dtel,phone2:stel})
      .toPromise()
      .then(res=>{
      if(res.json().success){
        alert('提交成功')
        this.navCtrl.pop();
      }

    })
  }
}
