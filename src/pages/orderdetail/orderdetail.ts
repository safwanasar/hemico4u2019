import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { Http } from "@angular/http";
import { MerchantMallProvider } from "../../providers/merchant-mall/merchant-mall";

/**
 * Generated class for the OrderdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-orderdetail",
  templateUrl: "orderdetail.html"
})
export class OrderdetailPage {
  public requestURL = `${URL}`;
  public order = {
    ORDER_STATUS: "Loading...",
    ORDER_QTY: "000",
    ORDER_AMOUNT: "000",
    DELIVERY_CHARGES: "000",
    ORDERITEMS: [{ NAME: "000", QTY: "000", PRICE: "000" }],
    SHIPPING_ADDRESS: {
      RECIPIENT: "Loading...",
      CONTACT: "Loading...",
      ADDRESS_1: "Loading..."
    }
  };
  public orderID = "";
  constructor(
    public http: Http,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private mallApi: MerchantMallProvider,
    public navParams: NavParams
  ) {
    this.orderID = navParams.get("orderID");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad OrderdetailPage");
    this.loadData();
  }
  loadData() {
    this.mallApi.getMyaccount().subscribe(account => {
      this.mallApi.oderdetail({ ...account, orderID: this.orderID }).subscribe(
        res => {
          let data = res.json();
          if (data["STATUS_MESSAGE"] != "FAILED") {
            this.order = data["ORDER"][this.orderID];
          } else {
            let error = this.alertCtrl.create({
              title: "Error",
              message: data["STATUS_REMARKS"],
              buttons: ["OK"]
            });
            console.log(res);
            error.present();
          }
        },
        err => {
          let error = this.alertCtrl.create({
            title: "Error",
            message: err,
            buttons: ["OK"]
          });
          error.present();
        }
      );
    });
  }
}
