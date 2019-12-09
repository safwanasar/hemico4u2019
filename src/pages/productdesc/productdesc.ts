import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { MerchantMallProvider } from "../../providers/merchant-mall/merchant-mall";

/**
 * Generated class for the ProductdescPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-productdesc",
  templateUrl: "productdesc.html"
})
export class ProductdescPage {
  public product;
  public segment = "description";
  public merchant;
  public relatedCategories = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mallApi: MerchantMallProvider,
    public loadingCtrl: LoadingController
  ) {
    let prodCode = this.navParams.get("ProdCode");
    if (prodCode) {
      let loader = this.presentLoading();
      this.mallApi.getProduct(prodCode).subscribe(
        res => {
          let response = res.json();
          this.product = response.PRODUCT;
          this.merchant = this.product.MERCHANT;

          this.mallApi
            .getProductByCategory(this.product.CATEGORY_ID)
            .subscribe(this.productList.bind(this));
          loader.dismiss();
        },
        err => {
          console.log("error", err);
          loader.dismiss();
        }
      );
    }
  }

  productList(res) {
    let response = res.json();
    console.log(this.relatedCategories, res);
    for (let key in response.CATEGORY) {
      let category = response.CATEGORY[key];
      console.log("category", category);
      this.relatedCategories = category.PRODUCTLIST;
      this.relatedCategories = this.relatedCategories.slice(0, 6);
    }
    console.log(this.relatedCategories, res);
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 15000
    });
    loader.present();
    return loader;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductdescPage");
  }

  chooserelatedCategory(ProdCode) {
    this.navCtrl.push("ProductdescPage", { ProdCode });
  }
}
