webpackJsonp([20],{

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductdescPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProductdescPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductdescPage = /** @class */ (function () {
    function ProductdescPage(navCtrl, navParams, mallApi, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mallApi = mallApi;
        this.loadingCtrl = loadingCtrl;
        this.segment = "description";
        this.relatedCategories = [];
        var prodCode = this.navParams.get("ProdCode");
        if (prodCode) {
            var loader_1 = this.presentLoading();
            this.mallApi.getProduct(prodCode).subscribe(function (res) {
                var response = res.json();
                _this.product = response.PRODUCT;
                _this.merchant = _this.product.MERCHANT;
                _this.mallApi
                    .getProductByCategory(_this.product.CATEGORY_ID)
                    .subscribe(_this.productList.bind(_this));
                loader_1.dismiss();
            }, function (err) {
                console.log("error", err);
                loader_1.dismiss();
            });
        }
    }
    ProductdescPage.prototype.productList = function (res) {
        var response = res.json();
        console.log(this.relatedCategories, res);
        for (var key in response.CATEGORY) {
            var category = response.CATEGORY[key];
            console.log("category", category);
            this.relatedCategories = category.PRODUCTLIST;
            this.relatedCategories = this.relatedCategories.slice(0, 6);
        }
        console.log(this.relatedCategories, res);
    };
    ProductdescPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 15000
        });
        loader.present();
        return loader;
    };
    ProductdescPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProductdescPage");
    };
    ProductdescPage.prototype.chooserelatedCategory = function (ProdCode) {
        this.navCtrl.push("ProductdescPage", { ProdCode: ProdCode });
    };
    ProductdescPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-productdesc",template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\productdesc\productdesc.html"*/'<!--\n  Generated template for the ProductdescPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="header_bg">\n    <ion-title *ngIf="product">\n      {{product.NAME}}\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager *ngIf="product">\n\n    <ion-slide *ngFor="let img of product.IMG.PICTURES">\n      <img src="{{img.PATH}}" />\n    </ion-slide>\n\n  </ion-slides>\n  <ion-grid class="product-title-summary">\n    <ion-row *ngIf="product">\n      <ion-col col-7>\n        <h1>{{product.NAME}}</h1>\n        <div float-left class="rating">\n          {{product.RATE}} <ion-icon name="star"></ion-icon>\n        </div>\n        <div float-right class="review">\n          15 Reviews >\n        </div>\n        <ion-chip>\n          <ion-label class="earn-points">{{product.POINTS.POINTS_NOLOGIN}}</ion-label>\n        </ion-chip>\n      </ion-col>\n      <ion-col col-5 class="price">\n        <span text-right class="discount">\n          RM{{product.ORI_PRICE}}\n        </span>\n        <span text-right class="final-price">\n          RM{{product.SELLING_PRICE}}\n        </span>\n        <span text-right class="save-percentage">\n          Save {{product.DISCOUNT_PERCENTAGE}}\n        </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="product-description" *ngIf="product">\n    <ion-row>\n      <ion-col col-12>\n        <ion-segment [(ngModel)]="segment">\n          <ion-segment-button value="description">\n            Description\n          </ion-segment-button>\n          <ion-segment-button value="seller">\n            Seller\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n    <ion-row [ngSwitch]="segment">\n      <ion-col *ngSwitchCase="\'description\'" [innerHtml]="product.SHORT_DESC">\n      </ion-col>\n      <ion-col *ngSwitchCase="\'seller\'">\n        <ng-container *ngIf="merchant">\n          <ul>\n            <li *ngIf="merchant.SELLER_NAME">Name: <div padding [innerHtml]="merchant.SELLER_NAME"></div>\n            </li>\n            <li *ngIf="merchant.SELLER_ADDRESS">Address: <div padding [innerHtml]="merchant.SELLER_ADDRESS"></div>\n            </li>\n            <li *ngIf="merchant.SELLER_PROFILE">Profile: <div padding [innerHtml]="merchant.SELLER_PROFILE"></div>\n            </li>\n            <li *ngIf="merchant.SELLER_EMAIL">Email: <div padding [innerHtml]="merchant.SELLER_EMAIL"></div>\n            </li>\n            <li *ngIf="merchant.SELLER_MOBILE">Mobile: <div padding [innerHtml]="merchant.SELLER_MOBILE"></div>\n            </li>\n            <li *ngIf="merchant.SELLER_LOCATION">Location: <div padding [innerHtml]="merchant.SELLER_LOCATION"></div>\n            </li>\n            <li *ngIf="merchant.EMBEDED_MAP">Embeded Map: <div padding [innerHtml]="merchant.EMBEDED_MAP"></div>\n            </li>\n            <li *ngIf="merchant.LARGE_MAP">Large Map: <div padding [innerHtml]="merchant.LARGE_MAP"></div>\n            </li>\n          </ul>\n        </ng-container>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-item>\n    Related Products\n  </ion-item>\n  <ion-grid class="related-product">\n    <ion-row>\n      <ion-col col-4 *ngFor="let relatedCategory of relatedCategories">\n        <img src="{{relatedCategory.IMG}}" (click)="chooserelatedCategory(relatedCategory.CODE)" />\n        <h5>{{relatedCategory.NAME}}</h5>\n        <div class="price" float-left>\n          RM{{relatedCategory.SELLING_PRICE}}\n        </div>\n        <div class="rating" float-right>\n          {{relatedCategory.RATE}} <ion-icon name="md-star"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col *ngIf="!relatedCategories.length">\n        Loading...\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button icon-end color="light" full>Add to Cart <ion-icon name="arrow-round-forward"></ion-icon></button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\productdesc\productdesc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ProductdescPage);
    return ProductdescPage;
}());

//# sourceMappingURL=productdesc.js.map

/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdescPageModule", function() { return ProductdescPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productdesc__ = __webpack_require__(1042);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductdescPageModule = /** @class */ (function () {
    function ProductdescPageModule() {
    }
    ProductdescPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productdesc__["a" /* ProductdescPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productdesc__["a" /* ProductdescPage */]),
            ],
        })
    ], ProductdescPageModule);
    return ProductdescPageModule;
}());

//# sourceMappingURL=productdesc.module.js.map

/***/ })

});
//# sourceMappingURL=20.js.map