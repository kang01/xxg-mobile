import { Component } from '@angular/core';
import { NavController, MenuController, Platform, IonicPage, ModalController } from 'ionic-angular';
import { EquipmentInfoPage } from '../equipment-info/equipment-info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}
  search(){
    
  }
  openModal(){
    let profileModal = this.modalCtrl.create(EquipmentInfoPage, { userId: 8675309 });
   profileModal.present();
  }

}
