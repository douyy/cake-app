import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { TypePage } from '../pages/type/type';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ShoppingPage } from '../pages/shopping/shopping';
import { MycakePage } from '../pages/mycake/mycake';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ProductPage} from "../pages/type/product/product";
import {BuyPage} from "../pages/type/buy/buy";
import {LinkmanPage} from "../pages/mycake/longing/linkman/linkman";
import {FindPage} from "../pages/mycake/find/find";
import {AdressPage} from "../pages/mycake/longing/adress/adress";
import {ChangePage} from "../pages/mycake/longing/change/change";
import {ChangepassPage} from "../pages/mycake/longing/changepass/changepass";
import {RegisterPage} from "../pages/mycake/register/register";
import {PrdetailPage} from "../pages/type/prdetail/prdetail";
import {HttpModule} from "@angular/http";
import {LongingPage} from "../pages/mycake/longing/longing";
import {UcenterPage} from "../pages/about/ucenter/ucenter";
import {Ucenter2Page} from "../pages/about/ucenter2/ucenter2";
import {Ucenter3Page} from "../pages/about/ucenter3/ucenter3";
import {Ucenter4Page} from "../pages/about/ucenter4/ucenter4";
import {Ucenter5Page} from "../pages/about/ucenter5/ucenter5";
import {Ucenter6Page} from "../pages/about/ucenter6/ucenter6";
import {Ucenter7Page} from "../pages/about/ucenter7/ucenter7";
import {Ucenter8Page} from "../pages/about/ucenter8/ucenter8";
import {Ucenter9Page} from "../pages/about/ucenter9/ucenter9";
import {Ucenter10Page} from "../pages/about/ucenter10/ucenter10";
import {Ucenter11Page} from "../pages/about/ucenter11/ucenter11";
import {Ucenter12Page} from "../pages/about/ucenter12/ucenter12";
import {Ucenter13Page} from "../pages/about/ucenter13/ucenter13";
import {Ucenter14Page} from "../pages/about/ucenter14/ucenter14";
import {Ucenter15Page} from "../pages/about/ucenter15/ucenter15";
import {Ucenter16Page} from "../pages/about/ucenter16/ucenter16";
import {ShoppingnumProvider} from "../providers/shoppingnum/shoppingnum";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TypePage,
    HomePage,
    TabsPage,
    ShoppingPage,
    MycakePage,
    ProductPage,
    PrdetailPage,
    LinkmanPage,
    FindPage,
    AdressPage,
    ChangePage,
    ChangepassPage,
    RegisterPage,
    LongingPage,
    UcenterPage,
    Ucenter2Page,
    Ucenter3Page,
    Ucenter4Page,
    Ucenter5Page,
    Ucenter6Page,
    Ucenter7Page,
    Ucenter8Page,
    Ucenter9Page,
    Ucenter10Page,
    Ucenter11Page,
    Ucenter12Page,
    Ucenter13Page,
    Ucenter14Page,
    Ucenter15Page,
    Ucenter16Page,
    BuyPage,
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TypePage,
    HomePage,
    TabsPage,
    ShoppingPage,
    MycakePage,
    ProductPage,
    PrdetailPage,
    LinkmanPage,
    FindPage,
    AdressPage,
    ChangePage,
    ChangepassPage,
    RegisterPage,
    LongingPage,
    UcenterPage,
    Ucenter2Page,
    Ucenter3Page,
    Ucenter4Page,
    Ucenter5Page,
    Ucenter6Page,
    Ucenter7Page,
    Ucenter8Page,
    Ucenter9Page,
    Ucenter10Page,
    Ucenter11Page,
    Ucenter12Page,
    Ucenter13Page,
    Ucenter14Page,
    Ucenter15Page,
    Ucenter16Page,
    BuyPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ShoppingnumProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
