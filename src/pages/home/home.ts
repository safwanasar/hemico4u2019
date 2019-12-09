import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, AlertController, Platform} from "ionic-angular";
import {MerchantMallProvider} from "../../providers/merchant-mall/merchant-mall";
import {LoginPage} from "../login/login";
import {LoadingProvider} from '../../providers/loading/loading';
import {StorageProvider} from "../../providers/storage/storage";
import {NotificationsProvider} from "../../providers/notifications/notifications";
import { LocalNotifications } from '@ionic-native/local-notifications';
import { FCM } from '@ionic-native/fcm'
import { ApiProvider } from '../../providers/api/api'
import { Device } from '@ionic-native/device'

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  public profile = {};

  /* public parseuinfo = {}; */

  constructor(
    private storageProvider: StorageProvider,
    private loading: LoadingProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public mallApi: MerchantMallProvider,
    public notificationsProvider: NotificationsProvider,
    private plt: Platform,
    private localNotifications: LocalNotifications,
    alertCtrl: AlertController,
    public fcm: FCM,
    public api: ApiProvider,
    public device: Device
  ) {
    /* this.plt.ready().then(() => {
      this.localNotifications.on('click').subscribe(notification => {
        alert(notification.data);
      });
    }); */
  }

  /* btnPushClicked() {
    this.plt.ready().then(() => {
      this.localNotifications.schedule({
        id: 1,
        title: 'My first Noti',
        text: 'We have a new application !',
        trigger: {at: new Date(new Date().getTime() + 10000)},
        foreground: true,
        data: {"id": 1, "name": "Mr.A"}
      });
    });
  } */

  ngOnInit() {

    this.loading.showLoading();

    this.mallApi.getMyaccount().subscribe(res => {
      if (res) {
        this.profile = res;

        // this.fcm.getToken().then(data => {
        //   this.api.saveFCMToken(res["LOGINID"],data,this.device.uuid).subscribe( data => {
        //     console.log(data)
        //   })
        // })
        /* alert(res);
        this.parseuinfo = "http://1mise.com/api?uid="+res["LOGINID"]+"&fcmtkn=";
        var testparse=  "http://1mise.com/api?uid="+res["LOGINID"]+"&fcmtkn=";
        alert(testparse); */
      } else {
        this.navCtrl.setRoot(LoginPage);
      }
      this.loading.dismissLoading();
    }, err => {
      this.loading.dismissLoading();
    });
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
