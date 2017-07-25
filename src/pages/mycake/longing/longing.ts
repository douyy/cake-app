import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from "@angular/http";
import {ChangePage} from "./change/change";
import {ChangepassPage} from "./changepass/changepass";
import {LinkmanPage} from "./linkman/linkman";
import {MycakePage} from "../mycake";

@Component({
  selector: 'page-about',
  templateUrl: 'longing.html'
})
export class LongingPage{
  phone;
  user;
  constructor(public navCtrl: NavController,public http:Http) {
  }
  ionViewWillEnter(){
    this.phone =  localStorage.getItem('userphone');
    console.log(this.phone);
    if (!this.phone){
      alert("请先登录")
      this.navCtrl.push(MycakePage);
      //console.log(this.phone);
    }
  }

  informate(){
    console.log(this.phone)
    return this.http.post('http://localhost:3000/s/userphone',{phone:this.phone}).toPromise()
      .then(res=>{
        var body = res.json();
        console.log(body);
        console.log(this.phone)
        if(body.success){
          //console.log(body.date);
          this.navCtrl.push(ChangePage,{user : body.date});
        }
      })
  }
  changepass(){this.navCtrl.push(ChangepassPage);}
  addadress(){this.navCtrl.push(LinkmanPage);}
  quirt(){
    localStorage.removeItem('userphone')
    //console.log(this.phone);
    this.navCtrl.parent.select(0);
  }
}
