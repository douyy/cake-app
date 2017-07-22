import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {LinkmanPage} from "../linkman/linkman";
@Component({
  selector: 'page-home',
  templateUrl: 'adress.html'
})

export class AdressPage{
  rsv;
  thisname;
  url;
  constructor(public navCtrl: NavController,public http:Http,public navparmas:NavParams) {
    this.thisname = this.navparmas.data.thisuser
    if(this.thisname == null){
      this.rsv={
        phone: localStorage.getItem('userphone'),
      };
      this.url = 'http://localhost:3000/s/adress';
    }else{
      this.rsv = this.navparmas.data.thisuser;
      this.url = 'http://localhost:3000/s/updateads';
    }
  }
  change(rsv){
    if(this.thisname == null){
      if(rsv==null){
        alert('请查看入内容')
      }else{
        return this.http.post(this.url,rsv).toPromise().then(res=>{
          var body = res.json();
          console.log(body);
          if (body.success){
            alert('保存成功')
            this.navCtrl.push(LinkmanPage,{adress:rsv})
          }else{
            alert('保存异常')
          }
        })
      }
    }else{
      if(rsv==null){
        alert('请查看入内容')
      }else{
        return this.http.put(this.url,rsv).toPromise().then(res=>{
          var body = res.json();
          console.log(body);
          if (body.success){
            alert('保存成功')
            this.navCtrl.push(LinkmanPage,{adress:rsv})
          }else{
            alert('保存异常')
          }
        })
      }
    }
  }

}
