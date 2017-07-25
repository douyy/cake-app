import { Component } from '@angular/core';
import {AlertController, NavController,} from 'ionic-angular';
import {Http} from "@angular/http";
@Component({
  selector: 'page-home',
  templateUrl: 'changepass.html'
})
export class ChangepassPage {
  cgpass;
  constructor(public navCtrl: NavController,public http:Http,public alertCtrl:AlertController) {
    this.cgpass={
      phone: localStorage.getItem('userphone'),
    }
  }
  changepass(cgpass){
    console.log(cgpass);

    if(cgpass.new1 == cgpass.new2){
      return this.http.put('http://localhost:3000/s/userpass',cgpass).toPromise().then(res=>{
        var body = res.json();
        if(body.success){
          let alert = this.alertCtrl.create({
            title: '修改成功',
            subTitle: '注意, 请不要重复修改!',
            buttons: ['OK']
          });
          alert.present();

        }else{ alert('!修改异常，请稍后尝试');}

      })
    }else{
      alert('两次输入密码不一致')
    }

  }
}
