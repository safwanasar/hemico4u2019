import {Injectable, ɵConsole} from '@angular/core';
import {StorageProvider} from '../storage/storage';
import {AlertController} from "ionic-angular";
import * as moment from 'moment';
import collect from 'collect.js';

/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationsProvider {

  notifications = null;

  constructor(
    public storage: StorageProvider,
    public alertCtrl: AlertController
  ) {
  }

  all() {
    return this.storage.get('hemico_notifications').then(val => {

      if (val == null) {
        this.notifications = [];
      } else {
        this.notifications = val;
      }

      return this.notifications;
    });
  }

  save(title: any, message: any, notificationID = null, launchURL = null, bigPicture = null) {

    Promise.all([
      this.all()
    ]).then(() => {
      let items = collect(this.notifications);
      let duplicate = items.where('notificationID', notificationID).first();

      if (duplicate) {
        items.reject(function (value: any) {
          return value.notificationID == notificationID;
        }).push({
          title: title,
          message: message,
          notificationID: notificationID,
          launchURL: launchURL,
          bigPicture: bigPicture,
          created_at: moment().format('HH:mm DD/MM/YYYY'),
        });
      } else {
        items.push({
          title: title,
          message: message,
          notificationID: notificationID,
          launchURL: launchURL,
          bigPicture: bigPicture,
          created_at: moment().format('HH:mm DD/MM/YYYY'),
        });
      }

      this.storage.set('hemico_notifications', items.toArray());
    });

    return this.storage.get('hemico_notifications');
  }

  delete(index) {

    Promise.all([
      this.all()
    ]).then(() => {
      this.notifications.splice(index, 1);
      this.storage.set('hemico_notifications', this.notifications);
    });

  }

  clear() {
    return Promise.all([
      this.storage.set('hemico_notifications', [])
    ]).then(() => this.notifications = []);
  }

  showAlert(title, message) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}
