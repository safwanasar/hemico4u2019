import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {MerchantMallProvider} from "../../providers/merchant-mall/merchant-mall";
import {Http} from "@angular/http";
import {LoginPage} from "../login/login";
import {LoadingProvider} from "../../providers/loading/loading";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

/**
 * Generated class for the NewagentcountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newagentcount',
  templateUrl: 'newagentcount.html',
})
export class NewagentcountPage {

  public data = {};
  public totalCount = 0;
  public networkCounts = [];

    constructor(
    public http: Http,
    private loading: LoadingProvider,
    private mallApi: MerchantMallProvider,
    public navCtrl: NavController,
    private theInAppBrowser: InAppBrowser,
    public navParams: NavParams
  ) {
  }

  public openWithSystemBrowser(url : string){
      let target = "_system";
      this.theInAppBrowser.create(url,target);
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {

    this.loading.showLoading();

    this.mallApi.getMyaccount().subscribe(account => {

      this.mallApi.agentcount(account).subscribe(res => {

        let data = res.json();
        this.totalCount = data.TOTALCOUNT;
        this.networkCounts = data.NETWORKCOUNT;

        this.loading.dismissLoading();
      }, err => {
        this.loading.dismissLoading();
      });
    });
  }

  logout() {
    this.mallApi.logout();
  }

  open(page, params: null) {
    this.navCtrl.push(page, params);
  }

  setRoot(page) {
    this.navCtrl.setRoot(page);
  }

}
