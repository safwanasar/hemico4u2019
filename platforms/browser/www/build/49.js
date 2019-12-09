webpackJsonp([49],{

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
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
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\cart\cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Shopping Cart</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3>\n          <img src="assets/imgs/item-thumb.jpg" style="display:block;"/>\n        </ion-col>\n        <ion-col col-9>\n          <div>\n            <h2>Addin Ilham Tablet Kunyah Pra Campuran</h2>\n            <span class="price">RM52.20</span>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <div class="delivery_opt">\n            <h4>Delivery Option</h4>\n            <div float-left>\n              <ion-radio value="friends" [disabled]="isDisabled"></ion-radio> Sent to\n            </div>\n            <div float-left>\n              <ion-radio value="enemies" checked></ion-radio> Collect from Merchant\n            </div>\n            <span>SBTS 1517,Unit 2, Jalan Sg Udang, Sg Acheh, 14310 Nibong Tebal, Pulau Pinang, Malaysia.</span>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3>\n          <img src="assets/imgs/item-thumb.jpg" style="display:block;"/>\n        </ion-col>\n        <ion-col col-9>\n          <div>\n            <h2>Addin Ilham Tablet Kunyah Pra Campuran</h2>\n            <span class="price">RM52.20</span>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <div class="delivery_opt">\n            <h4>Delivery Option</h4>\n            <div float-left>\n              <ion-radio value="friends" checked></ion-radio> Sent to\n            </div>\n            <div float-left>\n              <ion-radio value="enemies" [disabled]="isDisabled"></ion-radio> Collect from Merchant\n            </div>\n            <span>SBTS 1517,Unit 2, Jalan Sg Udang, Sg Acheh, 14310 Nibong Tebal, Pulau Pinang, Malaysia.</span>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3>\n          <img src="assets/imgs/item-thumb.jpg" style="display:block;"/>\n        </ion-col>\n        <ion-col col-9>\n          <div>\n            <h2>Addin Ilham Tablet Kunyah Pra Campuran</h2>\n            <span class="price">RM52.20</span>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <div class="delivery_opt">\n            <h4>Delivery Option</h4>\n            <div float-left>\n              <ion-radio value="friends" checked></ion-radio> Sent to\n            </div>\n            <div float-left>\n              <ion-radio value="enemies" [disabled]="isDisabled"></ion-radio> Collect from Merchant\n            </div>\n            <span>SBTS 1517,Unit 2, Jalan Sg Udang, Sg Acheh, 14310 Nibong Tebal, Pulau Pinang, Malaysia.</span>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3>\n          <img src="assets/imgs/item-thumb.jpg" style="display:block;"/>\n        </ion-col>\n        <ion-col col-9>\n          <div>\n            <h2>Addin Ilham Tablet Kunyah Pra Campuran</h2>\n            <span class="price">RM52.20</span>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <div class="delivery_opt">\n            <h4>Delivery Option</h4>\n            <div float-left>\n              <ion-radio value="friends" checked></ion-radio> Sent to\n            </div>\n            <div float-left>\n              <ion-radio value="enemies" [disabled]="isDisabled"></ion-radio> Collect from Merchant\n            </div>\n            <span>SBTS 1517,Unit 2, Jalan Sg Udang, Sg Acheh, 14310 Nibong Tebal, Pulau Pinang, Malaysia.</span>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div class="order-summary">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6 text-left>\n            <span class="txt">Order Total</span>\n            <span class="earn">Earn RM 0.80 Coin & E-Wallet</span>\n          </ion-col>\n          <ion-col col-6 text-right>\n            <span class="total-price">RM156.60</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div>\n      <button ion-button icon-end full class="checkout">Checkout <ion-icon name="arrow-round-forward"></ion-icon></button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(1014);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ })

});
//# sourceMappingURL=49.js.map