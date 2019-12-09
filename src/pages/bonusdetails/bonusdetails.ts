import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MerchantMallProvider} from "../../providers/merchant-mall/merchant-mall";
import {Http} from "@angular/http";
import {LoadingProvider} from "../../providers/loading/loading";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

/**
 * Generated class for the BonusdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bonusdetails',
  templateUrl: 'bonusdetails.html',
})
export class BonusdetailsPage {


  public period = "";
  public amount = 0;
  public bonusStatements = [];

  constructor(
    public loading: LoadingProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    private theInAppBrowser: InAppBrowser,
    private mallApi: MerchantMallProvider) {
  }

public openWithSystemBrowser(url : string){
    let target = "_system";
    this.theInAppBrowser.create(url,target);
}

  ionViewDidLoad() {
    this.period = this.navParams.get('PERIOD');
    this.amount = this.navParams.get('AMOUNT');

    this.getBonusStatements();
  }

  getBonusStatements() {

    this.loading.showLoading();

    let month = this.getMonthFromString(this.period);
    let year  = this.getYearFromString(this.period);

    this.mallApi.getMyaccount().subscribe(account => {

      account['MONTH'] = month;
      account['YEAR'] = year;

      this.mallApi.bonusdetail(account)
        .subscribe(res => {

          let data = res.json();
          this.bonusStatements = data.BONUSES;

          this.loading.dismissLoading();
      }, err => {
          this.loading.dismissLoading();
      });

    });
  }

  getMonthFromString(mon){
    return new Date(Date.parse(mon + " 1, 2019")).getMonth() + 1
  }

  getYearFromString(year){
    return new Date(Date.parse("January 1, " + year)).getFullYear()
  }
}
