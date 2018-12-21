import { TabsPage } from './../tabs/tabs';
import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Nav } from 'ionic-angular';
import { ListPage } from '../list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild('mycontent') nav: Nav

  rootPage: any = TabsPage;
  pages: ({ title: string; component: typeof HomePage; } | { title: string; component: typeof ListPage; })[];
  constructor(
    public navCtrl: NavController,
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
  ) {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
