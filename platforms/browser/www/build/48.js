webpackJsonp([48],{

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
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
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutPage');
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\checkout\checkout.html"*/'<!--\n  Generated template for the CheckoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar no-border-bottom>\n    <ion-title>Checkout</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="checkout">\n      <ion-segment-button value="shipping">\n        Shipping\n      </ion-segment-button>\n      <ion-segment-button value="payment">\n        Payment\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div [ngSwitch]="checkout">\n    <ion-list *ngSwitchCase="\'shipping\'">\n      <ion-item>\n        Choose Address\n      </ion-item>\n\n      <ion-card>\n        <ion-list radio-group>\n          <ion-item>\n            <ion-label>No. 83 Taman Rahmat, 06000 Jitra, Kedah</ion-label>\n            <ion-radio checked="true" value="1"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>No. 83 Taman Rahmat, 06000 Jitra, Kedah</ion-label>\n            <ion-radio value="2"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>No. 83 Taman Rahmat, 06000 Jitra, Kedah</ion-label>\n            <ion-radio value="3"></ion-radio>\n          </ion-item>\n        </ion-list>\n\n        <button ion-button color="light" full class="add-address">Add New Shipping Address</button>\n\n      </ion-card>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'payment\'" class="payment">\n\n        <ion-list-header>\n          Order Review\n        </ion-list-header>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-2><img src="assets/imgs/item-thumb.jpg" style="display:block;"/></ion-col>\n              <ion-col col-7>Hemico Ageless Beauty Soap (1)</ion-col>\n              <ion-col col-3 text-right>\n                <span class="price">Price</span>\n                RM22.50\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-2><img src="assets/imgs/item-thumb.jpg" style="display:block;"/></ion-col>\n              <ion-col col-7>Hemico Ageless Beauty Soap (1)</ion-col>\n              <ion-col col-3 text-right>\n                <span class="price">Price</span>\n                RM22.50\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n\n        <ion-list-header>\n          Personal Information\n        </ion-list-header>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12>\n                <ion-list>\n                  <ion-item>\n                    <p>Recipient Name</p>\n                    <h2>Ahmad Safwan Abd Rahman</h2>\n                  </ion-item>\n                </ion-list>\n                <ion-list>\n                  <ion-item>\n                    <p>Contact No.</p>\n                    <h2>+6017-249 2669</h2>\n                  </ion-item>\n                </ion-list>\n                <ion-list>\n                  <ion-item>\n                    <p>Email Address:</p>\n                    <h2>ids.safwan@gmail.com</h2>\n                  </ion-item>\n                </ion-list>\n                <ion-list>\n                  <ion-item>\n                    <p>Deliver to:</p>\n                    <h2>Lot 83, Taman Rahmat, 06000 Jitra, Kedah</h2>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n\n        <ion-list-header>\n          Payment Method\n        </ion-list-header>\n        <ion-list radio-group>\n          <ion-item class="select-payment">\n            <ion-label><img src="assets/imgs/fpx-icon.jpg" style="display:block;"/>\n              Online Internet Banking\n            </ion-label>\n            <ion-radio checked="true" value="4"></ion-radio>\n          </ion-item>\n\n          <ion-item class="select-payment">\n            <ion-label><img src="assets/imgs/coin-icon.jpg" class="small-ico" style="display:block;"/>MyMerchantMall Coins</ion-label>\n            <ion-radio value="5"></ion-radio>\n          </ion-item>\n\n          <ion-item class="select-payment">\n            <ion-label><img src="assets/imgs/wallet-icon.jpg" class="small-ico" style="display:block;"/>Hemico E-Wallet</ion-label>\n            <ion-radio value="6"></ion-radio>\n          </ion-item>\n        </ion-list>\n\n        <ion-list-header>\n          Total Price\n        </ion-list-header>\n        <ion-item class="total-price">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6 text-left>\n                <span>Sub total member Price</span>\n                RM81.00\n              </ion-col>\n              <ion-col col-6 text-right>\n                <span>Delivery Charges</span>\n                RM7.00\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n\n    </ion-list>\n\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div class="order-summary">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12 text-left>\n            <span class="txt">Review your information carefully to make sure everything is correct before proceed.</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div>\n      <button ion-button icon-end full class="checkout">Continue to Payment <ion-icon name="arrow-round-forward"></ion-icon></button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\checkout\checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(1013);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]),
            ],
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());

//# sourceMappingURL=checkout.module.js.map

/***/ })

});
//# sourceMappingURL=48.js.map