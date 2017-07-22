import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
@Component({
  selector: 'page-home',
  templateUrl: 'change.html'
})

export class ChangePage {
  updateuser:{};
  constructor(public navCtrl: NavController,public navparams:NavParams,public http:Http) {
   console.log(this.navparams.data.user);
    this.updateuser = this.navparams.data.user;
  }
  change(cguser){
      console.log(cguser);
      return this.http.put('http://localhost:3000/s/user',cguser).toPromise().then(res=>{
        var body = res.json();
        if(body.success){
          alert('修改成功');
        }else{alert('!修改异常，请稍后尝试');}

      })
  }

}
