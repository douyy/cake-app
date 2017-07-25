import {Component, ViewChild} from "@angular/core";
import {NavController} from "ionic-angular";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {TypePage} from "../type/type";
import {ShoppingPage} from "../shopping/shopping";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  cake:string[];
  type:string[];
  classify:string;
  alert:boolean;
  ca:string;
  cak:string[];
  cc:string;
  // searchQuery: string = '';
  // items: string[];
  //轮播
  @ViewChild('ionSlides') slides;


  constructor(public navCtrl: NavController, public http: Http) {
    // this.initializeItems();
    this.cak = [];
    this.cc = '';

    http.get('http://localhost:3000/cake').toPromise()
      .then(res => {
        var data = res.json().data;
        console.log(data);
        this.cake = data;
        return data;
      });

    http.get('http://localhost:3000/cake/type').toPromise()
      .then(res=>{
        var data = res.json().data;
        console.log(data);
        this.type = data;
        return data;
      });
  }

  //获得主内容
  getType(classify:string){
    if(this.cake){
      return this.cake.filter(c => c['classify']==classify);
    }
    return [];
  }

  //页面跳转
  many(){
    this.navCtrl.push(TypePage);
  }

  cart(c){
    this.cak = JSON.parse(localStorage.getItem('cc'));
    this.cak.push(c);
    console.log(c);
    localStorage.setItem('cc',JSON.stringify(this.cak));

    this.alert = true;
    setTimeout(()=>{
      this.alert = false;
    },2000);
  }


  // Slides在用户拖拽后，停止自动播放
  ionViewDidEnter() {
    this.slides.autoplayDisableOnInteraction = false;
    ////页面进入时启动自动播放
    this.slides.startAutoplay();
  }

  //页面离开时停止自动播放
  ionViewDidLeave() {
    this.slides.stopAutoplay();
  }


//   initializeItems() {
//     this.items = [
//       '生日蛋糕',
//       '祝寿蛋糕',
//       '庆典蛋糕',
//     ];
//   }
//
//   getItems(ev: any) {
//     this.initializeItems();
//
//     let val = ev.target.value;
//
//     if (val && val.trim() != '') {
//       this.items = this.items.filter((item) => {
//         return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
//       })
//     }
//   }
}
