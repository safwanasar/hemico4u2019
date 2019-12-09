import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MerchantMallProvider } from "../../providers/merchant-mall/merchant-mall";
import { LoginPage } from "../login/login";

/**
 * Generated class for the MyaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-myaccount",
  templateUrl: "myaccount.html"
})
export class MyaccountPage {
  public profile;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mallApi: MerchantMallProvider
  )  {
    this.mallApi.getMyaccount().subscribe(res => {
      if (res) {
        this.profile = res;
      } else {
        this.navCtrl.setRoot(LoginPage);
      }
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MyaccountPage");
  }

  logout() {
    this.mallApi.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  open(page) {
    this.navCtrl.push(page);
  }
  setRoot(page) {
    this.navCtrl.setRoot(page);
  }
}
