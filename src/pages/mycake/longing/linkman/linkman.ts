import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {AdressPage} from "../adress/adress";
import {Http} from "@angular/http";
import {toPromise} from "rxjs/operator/toPromise";

@Component({
  selector: 'page-about',
  templateUrl: 'linkman.html'
})
export class LinkmanPage {
  adress=[];
  phone;
  constructor(public navCtrl: NavController,public http:Http) {
    this.phone = localStorage.getItem('userphone');
    this.http.post('http://localhost:3000/s/lkads',{phone:this.phone}).toPromise().then(res=>{
      var body = res.json();
      if(body.success){
        this.adress = body.date;
        console.log(this.adress);
      }else{
        console.log(body.date);
      }
    })
  }
  address(){this.navCtrl.push(AdressPage)}
  changeadress(a){
    console.log(a);
    this.navCtrl.push(AdressPage,{thisuser:a})
  }
  radress(a){
    console.log(a);
    console.log(a.id)
    this.http.delete('http://localhost:3000/s/rmadress/'+a.id).toPromise().then(res=>{
      var body = res.json();
      console.log(body)
      if(body.success){
        alert('删除成功')
      }else{
        console.log(body.data);
      }
    })
  }
}
