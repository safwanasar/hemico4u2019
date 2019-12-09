import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {MerchantMallProvider} from "../../providers/merchant-mall/merchant-mall";
import {LoginPage} from "../login/login";
import {LoadingProvider} from '../../providers/loading/loading';
import {StorageProvider} from "../../providers/storage/storage";
import {NotificationsProvider} from "../../providers/notifications/notifications";

/**
 * Generated class for the MyworkplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myworkplace',
  templateUrl: 'myworkplace.html',
})
export class MyworkplacePage {

  public profile = {};

  constructor(
    private storageProvider: StorageProvider,
    private loading: LoadingProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public mallApi: MerchantMallProvider,
    public notificationsProvider: NotificationsProvider
  ) {
  }

  logout() {
    this.loading.showLoading('loading...');

    return Promise.all([
      this.mallApi.logout(),
    ]).then((res) => {
      this.navCtrl.setRoot(LoginPage)
      this.loading.dismissLoading()
    }).catch((err) => {
      this.loading.dismissLoading()
      this.loading.presentToast('Error Unable to logout!')
    });
  }

  open(page) {
    this.navCtrl.push(page);
  }

  setRoot(page) {
    this.navCtrl.setRoot(page);
  }

  notificationList() {
    // let NotiId = this.getRandomInt(5);
    // this.notificationsProvider.save(
    //   `Task ${NotiId}`,
    //   'Task Body Lorem ipsum dolur',
    //   NotiId,
    //   'https://www.hemico4u.com/konsep-perniagaan/',
    //   'https://www.hemico4u.com/wp-content/uploads/2018/12/Selamat-Tahun-Baru-01.jpg',
    // ).then((v) => {
    //   this.navCtrl.push('NotificationsPage');
    // });

    this.navCtrl.push('NotificationsPage');
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
