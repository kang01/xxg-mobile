import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import { NavController, MenuController, Platform, IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  tab1Root = ListPage;
  tab2Root = ListPage;
  tab3Root = HomePage;
  constructor(
    public navCtrl: NavController,
  ) {}
  search(){
    
  }

}
