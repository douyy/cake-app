import {Component} from '@angular/core';
import { NavController,ActionSheetController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {Http} from "@angular/http";

@Component({
  selector: 'page-about',
  templateUrl: 'shopping.html'
})
export class ShoppingPage{
  cake:string[];
  length:number;
  number:number;
  total:number;

  constructor(public navCtrl: NavController,
              public http:Http,
              public actionSheetCtrl: ActionSheetController) {
    this.cake = [];
    this.length = 1;
     this.cake = JSON.parse(localStorage.getItem('cc'));
     console.log(JSON.parse(localStorage.getItem('cc')));
    // localStorage.removeItem('cc');
    this.length = this.cake ? this.cake.length : 0;
    this.number = 1;
    console.log(this.cake);
    //搜索
    this.items = [];
    this.itemseach = [];
    this.initializeItems();
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

//  删除商品
  remove(name:string){
    alert('确定要删除？');
    let index = this.cake.indexOf(name);
    this.cake.splice(index,1);
    console.log(this.cake);
    localStorage.removeItem('cc');
  }

//  数量增加
  add(price:number){
    this.number++;
    this.total = price * this.number;
  }
//  数量减少
  subtract(price:number){
    if(this.number == 1){
      this.number = 1;
    }else{
      this.number--;
      this.total = price * this.number;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');

    this.cake = JSON.parse(localStorage.getItem('cc'));
    console.log(JSON.parse(localStorage.getItem('cc')));
    // localStorage.removeItem('cc');
    this.length = this.cake ? this.cake.length : 0;
    this.number = 1;
    console.log(this.cake);
  }

}
