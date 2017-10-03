import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileModel } from '../../components/profile-model';

@IonicPage()
@Component({
  selector: 'page-profile-detail',
  templateUrl: 'profile-detail.html',
})
export class ProfileDetailPage {
  selectedProfile: ProfileModel = null;
  constructor(public navCtrl: NavController,
              public navParams: NavParams
              ) {

    this.selectedProfile = navParams.get("profile");
    if(this.selectedProfile==null){
      console.log("view logged in user");
    }else{
      console.log("view selected user");
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad profileDetailPage');
  }
}