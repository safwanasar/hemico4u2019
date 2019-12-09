import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MerchantMallProvider } from "../../providers/merchant-mall/merchant-mall";
import { LoginPage } from "../login/login";
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  // fbName: Observable<any>;

  public profile;
  constructor(public navCtrl: NavController,public navParams: NavParams,public mallApi: MerchantMallProvider, public af: AngularFireDatabase ) {
    this.mallApi.getMyaccount().subscribe(res => {
      if (res) {
        this.profile = res;
      } else {
        this.navCtrl.setRoot(LoginPage);
      }
    });

   // this.fbName = af.list('feedback');
  }

  open(page) {
    this.navCtrl.push(page);
  }
  setRoot(page) {
    this.navCtrl.setRoot(page);
  }
}