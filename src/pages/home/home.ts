import {Component, ViewChild} from "@angular/core";
import {NavController,ActionSheetController} from "ionic-angular";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {TypePage} from "../type/type";
import {PrdetailPage} from "../type/prdetail/prdetail";
import {ProductPage} from "../type/product/product";

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


  constructor(public navCtrl: NavController, public http: Http,
              public actionSheetCtrl: ActionSheetController,) {
    // this.initializeItems();
    this.cak = [];
    this.cc = '';
    //搜索
    this.items = [];
    this.itemseach = [];
    this.initializeItems();

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

  //搜索
  items:string[];
  itemseach:string[];
  initializeItems() {
    this.http.get('http://localhost:3000/birthdayApp/stype')
      .toPromise().then(res=>{
      var data = res.json().data;
      for(var i = 0;i < data.length;i++){
        this.items.push(data[i].stype);
      }
    })
  }

  getItems(ev: any) {
    // Reset items back to all of the items

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.itemseach = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.itemseach = [];
    }
  }
  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title:'啦啦啦啦',
    });
    actionSheet.present();
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
  goProduct(type){
    this.navCtrl.push(ProductPage,{type:type});
  }
  godetail(path){
    this.navCtrl.push(PrdetailPage,{path:path});
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
}
