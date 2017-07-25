import { Component , ViewChild, NgZone} from '@angular/core';
import { NavController, NavParams,Content } from 'ionic-angular';

/**
 * Generated class for the UcenterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ucenter',
  templateUrl:'ucenter.html',
})
export class UcenterPage {
  mess:boolean;
  topshow:boolean;

  @ViewChild(Content) content:Content;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public zone:NgZone
  ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad UcenterPage');
  }

  //回到顶部
  scrollTo(){
    this.content.scrollTo(0,0,200);
  }
  scrollHandle(event){
    this.zone.run(()=>{
      if(event.scrollTop > 100){
        this.topshow = true;
      }else{
        this.topshow = false;
      }
    });
  }
  //微信
  weixin(){
    this.mess = true;
  }
  close(){
    this.mess = false;
  }
}
