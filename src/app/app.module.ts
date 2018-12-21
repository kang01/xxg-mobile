import { MenuPage } from './../pages/menu/menu';
import { LoginPage } from './../pages/login/login';
import { StartPage } from './../pages/start/start';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { EquipmentInfoPage } from '../pages/equipment-info/equipment-info';
import { MonitoringPage } from '../pages/monitoring/monitoring';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    StartPage,
    LoginPage,
    HomePage,
    MenuPage,
    TabsPage,
    EquipmentInfoPage,
    MonitoringPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true' ,      //隐藏全部子页面tabs
      iconMode: 'ios',                  //引用iOS的返回图标
      mode: 'ios',                      //把平台设置成iOS的风格
      modalEnter: 'modal-slide-in',     //设置返回的动画效果
      modalLeave: 'modal-slide-out',    //设置返回的动画效果
      backButtonText : '返回',          //设置返回按钮的文本
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    StartPage,
    LoginPage,
    HomePage,
    MenuPage,
    TabsPage,
    EquipmentInfoPage,
    MonitoringPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
