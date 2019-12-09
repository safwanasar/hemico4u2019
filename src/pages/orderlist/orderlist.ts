import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Http } from "@angular/http";
import { MerchantMallProvider } from "../../providers/merchant-mall/merchant-mall";

/**
 * Generated class for the OrderlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-orderlist",
  templateUrl: "orderlist.html"
})
export class OrderlistPage {
  public data = {};
  public orders = [];
  public orderIDs = [];
  constructor(
    public http: Http,
    private mallApi: MerchantMallProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad OrderlistPage");
    this.loadData();
  }
  loadData() {
    this.mallApi.getMyaccount().subscribe(account => {
      this.mallApi.orderlist(account).subscribe(res => {
        this.data = JSON.parse(res["_body"]);
        this.orders = this.data["ORDER"];
        console.log(this.data);
        this.orderIDs = Object.keys(this.orders);
        console.log(this.orders);
      });
    });
  }
  openOrder(id) {
    this.navCtrl.push("OrderdetailPage", { orderID: id });
  }
}
