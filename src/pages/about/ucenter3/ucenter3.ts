import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Ucenter3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ucenter3',
  templateUrl: 'ucenter3.html',
})
export class Ucenter3Page {
  mess:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ucenter3Page');
  }

  //微信
  weixin(){
    this.mess = true;
  }
  close(){
    this.mess = false;
  }
}
