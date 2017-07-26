import {Component} from '@angular/core';
import { NavController,ActionSheetController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {Http} from "@angular/http";
import {ShoppingnumProvider} from "../../providers/shoppingnum/shoppingnum";

@Component({
  selector: 'page-about',
  templateUrl: 'shopping.html'
})
export class ShoppingPage{
  cake:string[];
  total:number;
  // dingdan:string[];

  constructor(public navCtrl: NavController,
              public http:Http,
              public actionSheetCtrl: ActionSheetController,
              public channum:ShoppingnumProvider,
            ) {
    //搜索
    this.items = [];
    this.itemseach = [];
    this.initializeItems();
  }
  //购物车
  length:number;
  initgodingdan(){
    this.total = 0;
    this.http.get('http://localhost:3000/cake/cart',{params:{userphone:this.channum.phone}})
      .toPromise().then(res=>{
        var data = res.json().data;
        this.cake = data;
        // console.log(this.cake);
        for(var i = 0; i < this.cake.length;i++){
          this.total += this.cake[i]['num'] * parseInt(this.cake[i]['price']);
        }
        this.length = this.cake.length;
    })
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

  //页面跳转
  main(){
    this.navCtrl.push(HomePage);
  }
  //进入页面请求
  ionViewDidEnter(){
    this.initgodingdan();
  }
  //  删除商品
  remove(id:string){
    alert('确定要删除？');
    this.http.delete('http://localhost:3000/cake/cart',{params:{cakeid:id,phone:this.channum.phone}}).toPromise()
      .then(res=>{
          var data = res.json();
          if(data.success){
            this.initgodingdan();
          }
      })
  }
  //
  //  数量增加
    add(cakeid:number,num:number,price:string){
      num++;
      this.channum.numchange(cakeid,num).then((res)=>{
          if(res.success){
            this.initgodingdan();
          }
      })
    }
  //  数量减少
    subtract(cakeid:number,num:number,price:string){
      if(num == 1){
        num = 1;
      }else{
         num--;
        this.channum.numchange(cakeid,num).then((res)=>{
          if(res.success){
            this.initgodingdan();
          }
        })
      }
    }

}
