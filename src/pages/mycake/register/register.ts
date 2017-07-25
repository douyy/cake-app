import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import {Http} from "@angular/http";
import {MycakePage} from "../mycake";
const BASE_URL='http://localhost:3000/s';
@Component({
  selector: 'page-home',
  templateUrl: 'register.html'
})
export class RegisterPage {
  user;
  constructor(public navCtrl: NavController,public http:Http) {
    this.user = {}
  }
  register(user){
    console.log(user);
    return this.http.post(BASE_URL,user).toPromise().then(res=>{
        var body = res.json();
        console.log(body);
        if (body.success){
            alert('注册成功')
          this.navCtrl.push(MycakePage);
        }else{
          alert('用户名存在')
        }
    })
  }
}
