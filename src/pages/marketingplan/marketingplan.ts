import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

/** import { MerchantMallProvider } from "../../providers/merchant-mall/merchant-mall";
 * Generated class for the MarketingplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marketingplan',
  templateUrl: 'marketingplan.html',
})
export class MarketingplanPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private document: DocumentViewer
    ){
    }

  openLocalPdf() {
    const options: DocumentViewerOptions = {
      title: 'Marketing Plan'
    };
    this.document.viewDocument('assets/marketing-plan-2019.pdf', 'application/pdf', options);
  }

  open(page) {
    this.navCtrl.push(page);
  }
  setRoot(page) {
    this.navCtrl.setRoot(page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketingplanPage');
  }

}
