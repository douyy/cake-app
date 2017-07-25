import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from "./register/register";
import {FindPage} from "./find/find";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {LongingPage} from "./longing/longing";
@Component({
  selector: 'page-about',
  templateUrl: 'mycake.html'
})
export class MycakePage {
  login: string ="password";
  user;
  phone;
  constructor(public navCtrl: NavController,public http:Http) {
    this.user = {}
}
  register(){
    this.navCtrl.push(RegisterPage)
  }
  findpassword(){
    this.navCtrl.push(FindPage)
  }
  logins(user){
    console.log(user);
    return this.http.post('http://localhost:3000/s/u',user).toPromise().then(res=>{
      var body = res.json();
      console.log(body);
      if(body.success){
        alert('登录成功');
        localStorage.setItem('userphone',user.phone);
        console.log(user.phone);
        this.navCtrl.push(LongingPage);
      }if(!body.success){
        alert('密码错误');
      }
    })
  }
}
