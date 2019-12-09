import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {NotificationsProvider} from "../../providers/notifications/notifications";
import {LoadingProvider} from "../../providers/loading/loading";

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  public notificationList: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public notification: NotificationsProvider,
    public loading: LoadingProvider
  ) {
  }

  ngOnInit() {
    this.getNotifications();
  }

  getNotifications() {
    this.loading.showLoading();

    Promise.all([
      this.notification.all()
    ]).then(v => {
      this.notificationList = v[0];
      this.notificationList = this.notificationList.reverse();
      this.loading.dismissLoading();
    });
  }

  delete(item, i) {

    Promise.all([
      this.notification.delete(i),
    ]).then(() => {
      this.notificationList.splice(i, 1);
    });

  }

  clearAll() {
    Promise.all([
      this.notification.clear()
    ]).then(() => {
      this.notificationList = [];
    });
  }

  redirect(launchURL) {
    if (launchURL) {
      window.open(launchURL, '_system');
    }
  }
}
