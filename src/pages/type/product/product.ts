import {Component, OnInit,ViewChild, NgZone} from '@angular/core';
import {NavController, NavParams,ActionSheetController,Content} from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {PrdetailPage} from "../prdetail/prdetail";
import {MycakePage} from "../../mycake/mycake";

@Component({
  selector: 'page-contact',
  templateUrl: 'product.html'
})
export class ProductPage implements OnInit{
  title:string[];
  btype:string[];
  btypenow:string;
  stype:string[];
  togg:boolean;
  xuan:string[];
  num:number;
  cake:string[];
  zong:string;
  items: string[];
  itemseach:string[];
  mess:boolean;
  topshow:boolean;

  @ViewChild(Content) content:Content;

  constructor(
      public navCtrl: NavController,
      public navParams:NavParams,
      public actionSheetCtrl: ActionSheetController,
      public http:Http,
      public zone:NgZone
  ) {
  }

  ngOnInit():void{
      this.togg = false;
      this.title = this.navParams.data.type;
      this.xuan = [];
      this.num = 0;
      this.zong = '1';
      this.index = 1;
      //搜索
      this.items = [];
      this.itemseach = [];
      this.initializeItems();
      //  btype请求
      this.http.get('http://localhost:3000/birthdayApp/btype/'+this.title)
        .toPromise().then(res=>{
        var data = res.json().data;
        this.btype = data;
        this.btypenow = this.btype[this.xuan.length]['btype'];
      })//stype请求
        .then(res=>{
          this.http.get('http://localhost:3000/birthdayApp/stype')
            .toPromise().then(res=>{
              var data = res.json().data;
              for(let d of data){
                this.condition[d.btype]='';
              }
              this.stype = data;
          })
        })
        .catch(this.handleError);
      this.soso(this.condition,1);
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

  //  错误处理
  handleError(error){
    return Promise.reject(error.message||error);
  }
  //分类显示过滤
  getSt(btype:string){
    if (this.stype)
      return this.stype.filter(st=>st['btype']==btype)
    return [];
  }


  condition={}; //以分类id进行数据库查询
  condition2 = {}; //以分类名字添加到数组
  newcondition = {};//去掉空的对象
  // 点击
  cur(btype,typeid,stype){
    this.condition[btype]=typeid;
    this.condition2[btype]=stype;
  }
  isSelected(btype,typeid){
    return this.condition[btype]==typeid;
  }

  //搜索筛选
  shai(){
    this.xuan = [];
    //添加到数组显示
    for(var key in this.condition2){
      if(this.condition2[key] == undefined){
        delete  this.condition2[key];
      }else{
        this.xuan.push(this.condition2[key]);
      }
    }
    //当前显示分类
    for(var k in this.condition){
      if(this.condition[k] == ''){
        this.btypenow = k;
        break;
      }
    }
    //删除插入为空的
    this.newcondition = {};
    for(var k in this.condition){
      this.newcondition[k] = this.condition[k];
      if(this.newcondition[k] == ''){
        delete this.newcondition[k];
      }
    }
  }
  total:number;
  size:number;
  cakelen:number;
  //搜索请求数据库
  soso(aa,page){
    // console.log(aa);
    this.http.post('http://localhost:3000/birthdayApp/cake',{cake:aa,page:page})
      .toPromise().then(res=>{
      var data = res.json().data;
      this.cake = data.results;
      this.total = data.total;
      this.size = data.size;
      this.cakelen = this.cake.length;
    })
      .catch(this.handleError);
  }
  //选择搜索
  choose(typeid,stype,btype){
    this.cur(btype,typeid,stype);
    this.shai();
    this.soso(this.newcondition,1);
  };
  //  确定搜索
  select(){
    this.shai();
    this.soso(this.newcondition,1);
    this.togg = !this.togg;
  };
  //收起
  hide(){
    this.togg = !this.togg;
  }
  //  链接跳转
  detail(path){
    this.navCtrl.push(PrdetailPage,{path:path})
  }
  //综合选择
  zonghe(num){
      this.zong = num;
  }

  index:number;
  //下一页
  next(){
    this.index ++;
    this.soso(this.newcondition,this.index);
  }
 //  上一页
  prev(){
    this.index --;
    this.soso(this.newcondition,this.index);
  }
  //购物车
  phone:string;
  goshopping(cakeid){
    this.phone = localStorage.getItem('userphone');
    if(this.phone == null){
      this.navCtrl.push(MycakePage);
    }else{
      console.log(1);
    }
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
