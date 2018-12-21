import { MenuPage } from './../menu/menu';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, ToastController } from 'ionic-angular';
import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('content') nav: Nav;
  public isRemember: boolean = false;
  public isShow: boolean = false;
  iconStyle: object = {'color':'#488aff','font-size':'1.4em'};
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(username,password){
    if (username.value.length === 0){
      this.showToast("top", "请输入用户名");
      return false;
    }

    if (password.value.length === 0){
      this.showToast("top", "请输入密码");
      return false;
    }
    let data = {username: username.value, password: password.value, isRemember: this.isRemember};

    this.storage.remove("USER_INFO");
    this.storage.set("USER_INFO", JSON.stringify(data));
    this.navCtrl.push(MenuPage);
  }
  showToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

}
