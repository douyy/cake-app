import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import {ProductPage} from "./product/product";
import {Http} from "@angular/http";

@Component({
  selector: 'page-contact',
  templateUrl: 'type.html'
})
export class TypePage {

    searchQuery: string = '';
    items: string[];
    itemseach:string[];

  constructor(
      public navCtrl: NavController,
      public actionSheetCtrl: ActionSheetController,
      public http:Http
  ) {
    this.items = [];
    this.itemseach = [];
    this.initializeItems();
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

  //按钮
  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  //  链接跳转
  go(type){
    this.navCtrl.push(ProductPage,{type:type})
  }
}
