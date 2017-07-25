import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {UcenterPage} from "./ucenter/ucenter";
import {Ucenter2Page} from "./ucenter2/ucenter2";
import {Ucenter3Page} from "./ucenter3/ucenter3";
import {Ucenter4Page} from "./ucenter4/ucenter4";
import {Ucenter5Page} from "./ucenter5/ucenter5";
import {Ucenter6Page} from "./ucenter6/ucenter6";
import {Ucenter7Page} from "./ucenter7/ucenter7";
import {Ucenter8Page} from "./ucenter8/ucenter8";
import {Ucenter9Page} from "./ucenter9/ucenter9";
import {Ucenter10Page} from "./ucenter10/ucenter10";
import {Ucenter11Page} from "./ucenter11/ucenter11";
import {Ucenter12Page} from "./ucenter12/ucenter12";
import {Ucenter13Page} from "./ucenter13/ucenter13";
import {Ucenter14Page} from "./ucenter14/ucenter14";
import {Ucenter15Page} from "./ucenter15/ucenter15";
import {Ucenter16Page} from "./ucenter16/ucenter16";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public http:Http) {

  }


  go(){
    this.navCtrl.push(UcenterPage)
  }
  go2(){
    this.navCtrl.push(Ucenter2Page)
  }
  go3(){
    this.navCtrl.push(Ucenter3Page)
  }
  go4(){
    this.navCtrl.push(Ucenter4Page)
  }
  go5(){
    this.navCtrl.push(Ucenter5Page)
  }
  go6(){
    this.navCtrl.push(Ucenter6Page)
  }
  go7(){
    this.navCtrl.push(Ucenter7Page)
  }
  go8(){
    this.navCtrl.push(Ucenter8Page)
  }
  go9(){
    this.navCtrl.push(Ucenter9Page)
  }
  go10(){
    this.navCtrl.push(Ucenter10Page)
  }
  go11(){
    this.navCtrl.push(Ucenter11Page)
  }
  go12(){
    this.navCtrl.push(Ucenter12Page)
  }
  go13(){
    this.navCtrl.push(Ucenter13Page)
  }
  go14(){
    this.navCtrl.push(Ucenter14Page)
  }
  go15(){
    this.navCtrl.push(Ucenter15Page)
  }
  go16(){
    this.navCtrl.push(Ucenter16Page)
  }
}
