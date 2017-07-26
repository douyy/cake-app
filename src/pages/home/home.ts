import {Component, NgZone, ViewChild} from "@angular/core";
import {NavController,Content,ActionSheetController
} from "ionic-angular";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {TypePage} from "../type/type";
import {LongingPage} from "../mycake/longing/longing";
import {PrdetailPage} from "../type/prdetail/prdetail";
import {ProductPage} from "../type/product/product";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  cake:string[];
  type:string[];
  carts:string[];
  classify:string;
  alert:boolean;
  ca:string;
  cak:string[];
  cc:string;
  phone:any;
  mess:boolean;
  topshow:boolean;

  //轮播
  @ViewChild('ionSlides') slides;
  @ViewChild(Content) content:Content;


  constructor(public navCtrl: NavController,
              public http: Http,
              private actionSheetCtrl:ActionSheetController,
              public zone:NgZone
  ) {
    this.cak = [];
    this.cc = '';

    //搜索
    this.items = [];
    this.itemseach = [];
    this.topshow = false;
    this.initializeItems();


    http.get('http://localhost:3000/cake').toPromise()
      .then(res => {
        var data = res.json().data;
        console.log(data);
        this.cake = data;
      });

    http.get('http://localhost:3000/cake/type').toPromise()
      .then(res=>{
        var data = res.json().data;
        // console.log(data);
        this.type = data;
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
  listgo(){
    this.navCtrl.push(ProductPage,{type:'蛋糕'});
  }
  goProduct(type){
    this.navCtrl.push(ProductPage,{type:type});
  }
  godetail(path){
    this.navCtrl.push(PrdetailPage,{path:path});
  }

  cart(c){
    this.phone =  localStorage.getItem('userphone');
    if(this.phone == ''){
     this.navCtrl.push(LongingPage);
     }else{
        this.http.post('http://localhost:3000/cake',{cakeid:c,phone:this.phone}).toPromise()
          .then(res=>{
            var data = res.json();
            if(data.success){
              this.alert = true;
            }
          });
    }
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

  //回到顶部
  scrollTo(){
    this.content.scrollTo(0,0,200);
  }
  scrollHandle(event){
    this.zone.run(()=>{
      if(event.scrollTop > 100){
        this.topshow = true;
      }else{
        this.topshow = false;
      }
    });
  }

  //微信
  weixin(){
    this.mess = true;
  }
  close(){
    this.mess = false;
  }
  //轮播跳转
  lungo(path){
    this.navCtrl.push(PrdetailPage,{path:path});
  }
}
