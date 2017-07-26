import {Component} from '@angular/core';
import {NavController,ToastController} from 'ionic-angular';
import {Http} from "@angular/http";

@Component({
  selector: 'page-contact',
  templateUrl: 'buy.html'
})
export class BuyPage {
  cart:string[];
  number:number;

  constructor(public navCtrl: NavController,
              public http: Http,
              public toastCtrl: ToastController) {
    http.get('http://localhost:3000/cake/cart').toPromise()
      .then(res => {
        var data = res.json().data;
        console.log(data);
        this.cart = data;
        return data;
      });

    let elements = document.querySelectorAll(".tabbar");
    if(elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display ='none';
      });
    }
  }

  //隐藏tabs
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'flex';
      });
    }
  }

//  数量增加
  add(number:any,e:any){

  }

  presentToast(dtime,mess,liuyan) {
    if(dtime == '' || mess == '' || liuyan == ''){
      alert('请把信息填写完整');
    }

    let toast = this.toastCtrl.create({
      message: '请付款！',
    });
    toast.present();
  }


}
