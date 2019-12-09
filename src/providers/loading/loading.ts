import {Injectable} from '@angular/core';
import {LoadingController, ToastController} from 'ionic-angular';

/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadingProvider {
  loading: any;

  constructor(private loadingCtrl: LoadingController,
              public toastCtrl: ToastController) {
  }

  showLoading(msg: string = 'Please Wait...') {
    if (!this.loading) {
      this.loading = this.loadingCtrl.create({content: msg});
      this.loading.present();
    }
  }

  dismissLoading() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }

  presentToast(msg: string = 'Loading...') {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
