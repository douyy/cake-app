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
import {FindPage} from "../pages/mycake/find/find";
import {LongingPage} from "../pages/mycake/longing/longing";
import {AdressPage} from "../pages/mycake/longing/adress/adress";
import {ChangepassPage} from "../pages/mycake/longing/changepass/changepass";
import {ChangePage} from "../pages/mycake/longing/change/change";
import {LinkmanPage} from "../pages/mycake/longing/linkman/linkman";
import {RegisterPage} from "../pages/mycake/register/register";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TypePage,
    HomePage,
    TabsPage,
    ShoppingPage,
    MycakePage,
    FindPage,
    LongingPage,
    AdressPage,
    ChangepassPage,
    ChangePage,
    LinkmanPage,
    RegisterPage,
    FindPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    FindPage,
    LongingPage,
    AdressPage,
    ChangepassPage,
    ChangePage,
    LinkmanPage,
    RegisterPage,
    FindPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
