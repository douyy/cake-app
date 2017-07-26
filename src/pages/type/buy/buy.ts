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
    this.number = 1;

    http.get('http://localhost:3000/cake/cartding').toPromise()
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
    console.log(this.cart[0]['cakeid']);
    this.http.delete('http://localhost:3000/cake',{params:{cakeid:this.cart[0]['cakeid'],phone:this.cart[0]['phone']}})
      .toPromise()
      .then(res =>{
        var data = res.json();
        if(data.success){
          alert('取消订单');
        }
      });
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

//增加
  add(){
    this.number++;
  }
  //减少
  abstract(){
    this.number--;
    if(this.number <= 1){
      this.number = 1;
    }
  }
}
