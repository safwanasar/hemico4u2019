import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MerchantMallProvider} from "../../providers/merchant-mall/merchant-mall";
import {LoginPage} from "../login/login";
import {StorageProvider} from "../../providers/storage/storage";
import {LoadingProvider} from '../../providers/loading/loading';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

/**
 * Generated class for the UserprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userprofile',
  templateUrl: 'userprofile.html',
})
export class UserprofilePage {

  public profile = {};

  constructor(
    private storageProvider: StorageProvider,
    private loading: LoadingProvider,
    public navCtrl: NavController,
    public mallApi: MerchantMallProvider,
    private theInAppBrowser: InAppBrowser,
    public navParams: NavParams
    ) {
  }

  public openWithSystemBrowser(url : string){
      let target = "_system";
      this.theInAppBrowser.create(url,target);
  }

  ngOnInit() {

    this.loading.showLoading();

    this.mallApi.getMyaccount().subscribe(res => {
      if (res) {
        this.profile = res;
      } else {
        this.navCtrl.setRoot(LoginPage);
      }
      this.loading.dismissLoading();
    }, err => {
      this.loading.dismissLoading();
    });
  }

  open(page) {
    this.navCtrl.push(page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserprofilePage');
  }

}
