import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from "../home/home";

@Component({
  selector: 'page-about',
  templateUrl: 'shopping.html'
})
export class ShoppingPage{
  cake:string[];
  length:number;
  number:number;
  total:number;

  constructor(public navCtrl: NavController) {
    this.cake = [];
    this.length = 1;
    // this.cake = JSON.parse(localStorage.getItem('cc'));
    // console.log(JSON.parse(localStorage.getItem('cc')));
    // // localStorage.removeItem('cc');
    // this.length = this.cake ? this.cake.length : 0;
    // this.number = 1;
    // console.log(this.cake);
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
