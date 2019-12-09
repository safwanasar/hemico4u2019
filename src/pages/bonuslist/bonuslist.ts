import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {MerchantMallProvider} from "../../providers/merchant-mall/merchant-mall";
import {Http} from "@angular/http";
import {LoginPage} from "../login/login";
import {LoadingProvider} from "../../providers/loading/loading";


/**
 * Generated class for the OrderlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-bonuslist",
  templateUrl: "bonuslist.html"
})
export class BonuslistPage {

  public data = {};
  public totalIncome = 0;
  public monthlyIncomes = [];

  constructor(
    public http: Http,
    private loading: LoadingProvider,
    private mallApi: MerchantMallProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {

    this.loading.showLoading();

    this.mallApi.getMyaccount().subscribe(account => {

      this.mallApi.bonuslist(account).subscribe(res => {

        let data = res.json();
        this.totalIncome = data.TOTALINCOME;
        this.monthlyIncomes = data.MONTHINCOME;

        this.loading.dismissLoading();
      }, err => {
        this.loading.dismissLoading();
      });
    });
  }

  openOrder(id) {
    this.navCtrl.push("OrderdetailPage", {orderID: id});
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
