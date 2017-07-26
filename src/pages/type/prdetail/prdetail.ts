import {Component, ViewChild, NgZone} from '@angular/core';
import {NavController, NavParams, Slides,ActionSheetController,Content} from 'ionic-angular';
import {Http} from "@angular/http";
import {BuyPage} from "../buy/buy";

@Component({
  selector: 'page-contact',
  templateUrl: 'prdetail.html'
})
export class PrdetailPage {
  detail:string[];
  chicun:boolean;
  more:boolean;
  sanjiao:any;
  sizenow:number;
  money:number;
  oldmoney:number;
  joinarr:any;
  obj:string;
  dd:string[];
  sizestr:string;
  discuss:string[];
  items: string[];
  itemseach:string[];
  mess:boolean;
  topshow:boolean;
  phone:any;

  @ViewChild(Slides) slides:Slides;
  @ViewChild(Content) content:Content;

  constructor(
      public navCtrl: NavController,
      public navParams:NavParams,
      public actionSheetCtrl: ActionSheetController,
      public http:Http,
      public zone:NgZone
  ) {
      this.detail = this.navParams.data.path;
      this.chicun = false;
      this.more = false;
      this.sanjiao = '▼';
      this.sizenow = 1;
      this.money = this.detail['price'];
      this.oldmoney = this.detail['oldprice'];
      this.joinarr = [];
      this.items = [];
      this.itemseach = [];
      this.initializeItems();

      //tabs
      let elements = document.querySelectorAll(".tabbar");
      if(elements != null) {
        Object.keys(elements).map((key) => {
          elements[key].style.display ='none';
        });
      }

      //评论数据获取
      http.get('http://localhost:3000/birthdayApp/discuss')
        .toPromise().then(res=>{
          var data = res.json().data;
          this.discuss = data;
          // console.log(this.discuss);
      })
  }
  //隐藏tabs
  // ionViewWillLeave() {
  //   let elements = document.querySelectorAll(".tabbar");
  //   if (elements != null) {
  //     Object.keys(elements).map((key) => {
  //       elements[key].style.display = 'flex';
  //     });
  //   }
  // }
  //轮播
  goToSlide(){
    this.slides.slideTo(2,500);
  }

  slideChanged(){
    this.slides.autoplayDisableOnInteraction = false;
  }

  //  尺寸显示隐藏
  chicuntogg(){
    this.chicun = !this.chicun;
  }

  //加载更多
  jia(){
    this.more = !this.more;
    //角标
    if(this.sanjiao == '▼'){
      this.sanjiao = '▲';
    }else{
      this.sanjiao = '▼';
    }
  }

  //尺寸选择
  sizechoose(size){
    switch(size){
      case '1':
        this.sizestr = '八英寸(20CM,2-3人食用)';
        break;
      case '2':
        this.sizestr = '十英寸(25CM,4-6人食用)';
        break;
      case '3':
        this.sizestr = '十二英寸(30CM,6-9人食用)';
        break;
      case '4':
        this.sizestr = '十四英寸(35CM,9-12人食用)';
        break;
      case '5':
        this.sizestr = '十六英寸(40CM,12-15人食用)';
        break;
      case '6':
        this.sizestr = '十八英寸(45CM,15-18人食用)';
        break;
      case '7':
        this.sizestr = '二十英寸(50CM,中型聚餐)';
        break;
    }
    this.sizenow = size;
    this.money = parseInt(this.detail['price']) + (size * 50);
    this.oldmoney = parseInt(this.detail['oldprice']) + (size * 50);
  }

  //加入购物车
  join(cake){
    console.log(this.sizestr);
    cake['size'] = this.sizestr;
    cake['money'] = this.money;
    this.joinarr.push(cake);
    this.obj = JSON.stringify(this.joinarr);

    localStorage.setItem('aa',this.obj);
    this.dd = JSON.parse(localStorage.getItem('aa'));
  }
  //搜索
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

  //立即购买
  buy(detail){
    this.phone = localStorage.getItem('userphone');
    console.log(detail);
    this.http.post('http://localhost:3000/cake',
      {
        cakeid:detail.cakeid,
        number:detail.number,
        phone:this.phone,
        size:this.sizestr
      })
      .toPromise()
      .then(res=>{
        if(res.json().success){
          this.navCtrl.push(BuyPage);
        }
      });

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
}
