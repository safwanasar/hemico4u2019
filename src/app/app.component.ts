import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { LoginPage } from "../pages/login/login";
import { HomePage } from "../pages/home/home";
import { MerchantMallProvider } from "../providers/merchant-mall/merchant-mall";
import { StorageProvider } from "../providers/storage/storage";
import { LoadingProvider } from "../providers/loading/loading";
import { NotificationsProvider } from "../providers/notifications/notifications";

import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';
import { isCordovaAvailable } from '../common/is-cordova-available';
import { oneSignalAppId, sender_id } from '../config';
import { ApiProvider } from '../providers/api/api'
// import { UniqueDeviceID } from '@ionic-native/unique-device-id'
import { Device } from '@ionic-native/device'

import { FCM } from '@ionic-native/fcm';

@Component({
  templateUrl: "app.html"
})
export class MyApp {

  public profile = {};

  @ViewChild(Nav)
  nav: Nav;

  rootPage: any = LoginPage;
  uniqueID: any;

  categories;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private oneSignal: OneSignal,
    public mallApi: MerchantMallProvider,
    public loading: LoadingProvider,
    public storage: StorageProvider,
    public notification: NotificationsProvider,
    private fcm: FCM,
    private api: ApiProvider,
    // public uuid: UniqueDeviceID
    public device: Device
  ) {
    this.initializeApp();
  }

  ngOnInit() {

    this.loading.showLoading();

    this.mallApi.getMyaccount().subscribe(res => {
      if (res) {
        this.profile = res;
      } else {
        this.nav.setRoot(LoginPage);
      }
      this.loading.dismissLoading();
    }, err => {
      this.loading.dismissLoading();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (isCordovaAvailable()) {
        this.oneSignal.startInit(oneSignalAppId, sender_id);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
        this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
        this.oneSignal.endInit();

        // this.oneSignal.getIds().then(identity => {
        // alert(identity.pushToken + ' its PUSHTOKEN');
        // alert(identity.userId + 'its USERID');
        // });

      }

      // this.uuid.get().then(data => {
      //   this.uniqueID = data
      // }).catch(error => {
      //   throw error
      // })


      this.fcm.getToken().then(token => {
        let user_id
        this.mallApi.getMyaccount().subscribe(data => {
          console.log(data)
          user_id = data['LOGINID']

          let manufacter = this.device.manufacturer
          let platform = this.device.platform
          let version = this.device.version
          let model = this.device.model
          let device_id = this.device.uuid

          this.api.saveFCMTOKENwithBody(user_id, token, device_id, manufacter, platform, version, model).subscribe(responces => {
            console.log(responces);
          })

        })


        // this.api.saveFCMToken(user_id, data, this.device.uuid).subscribe(responces => {
        //   console.log(responces)
        // })
      });


      this.fcm.onTokenRefresh().subscribe(token => {
        let user_id
        this.mallApi.getMyaccount().subscribe(data => {
          console.log(data)
          user_id = data['LOGINID']
          let manufacter = this.device.manufacturer
          let platform = this.device.platform
          let version = this.device.version
          let model = this.device.model
          let device_id = this.device.uuid

          this.api.saveFCMTOKENwithBody(user_id, token, device_id, manufacter, platform, version, model).subscribe(responces => {
            console.log(responces);
          })
        })

        // this.api.saveFCMToken(user_id, token, this.device.uuid).subscribe(responces => {
        //   console.log(responces)
        // })


      });


    });
  }

  private onPushReceived(payload: OSNotificationPayload) {
    this.notification.save(
      payload.title,
      payload.body,
      payload.notificationID,
      payload.launchURL,
      payload.bigPicture
    ).then(() => this.notification.showAlert(payload.title, payload.body));
  }

  private onPushOpened(payload: OSNotificationPayload) {
    this.notification.save(
      payload.title,
      payload.body,
      payload.notificationID,
      payload.launchURL,
      payload.bigPicture
    ).then(() => this.notification.showAlert(payload.title, payload.body));
  }


  setRoot(page, data = {}) {
    this.nav.setRoot(page, data);
  }

  open(page) {
    this.nav.push(page);
  }

  chooseCategory(category) {
    this.setRoot(HomePage, { category });
  }

  logout() {
    this.loading.showLoading('loading...');
    let user_id
    this.mallApi.getMyaccount().subscribe(data => {
      user_id = data['LOGINID']
      this.api.logoutFCMToken(user_id, this.device.uuid).subscribe(responces => {
        console.log(responces)
      })
    })
    return Promise.all([
      this.mallApi.logout(),
    ]).then((res) => {
      this.nav.setRoot(LoginPage)
      this.loading.dismissLoading()
    }).catch((err) => {
      this.loading.dismissLoading()
      this.loading.presentToast('Error Unable to logout!')
    });
  }

}
