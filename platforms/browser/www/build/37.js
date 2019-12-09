webpackJsonp([37],{

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MerchantloungePage; });
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
 * Generated class for the MerchantloungePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MerchantloungePage = /** @class */ (function () {
    function MerchantloungePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MerchantloungePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MerchantloungePage');
    };
    MerchantloungePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-merchantlounge',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\merchantlounge\merchantlounge.html"*/'<!--\n  Generated template for the MerchantloungePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-navbar>\n    <ion-title>Merchant Lounge</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="head-merchant" padding>\n    <h3>ADDINHQ</h3>\n    <p>ID: a3628510  |  Phone No: 60175767078</p>\n    <ion-slides pager>\n      <ion-slide>\n        <ion-grid>\n          <ion-row class="slide-base">\n              <ion-col col-7 text-left>\n                <h5>Today Sales</h5>\n                <p>30 August 2018</p>\n                <h3>RM12,750</h3>\n              </ion-col>\n              <ion-col col-5>\n                <ion-icon name="cash"></ion-icon>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-slide>\n      <ion-slide>\n        <ion-grid>\n          <ion-row class="slide-base total">\n              <ion-col col-7 text-left>\n                <h5>Total Sales</h5>\n                <p>30 August 2018</p>\n                <h3>RM100,750</h3>\n              </ion-col>\n              <ion-col col-5>\n                <ion-icon name="cash"></ion-icon>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-slide>\n    </ion-slides>\n    <button ion-button icon-start color="light" class="order-list" full><ion-icon name="list-box"></ion-icon> Order List </button>\n  </div>\n  <div class="merchant-content" padding>\n    <ion-title>Manage Account</ion-title>\n    <ion-grid>\n      <ion-row class="wallet-balance">\n          <ion-col col-3 text-left>\n            <ion-icon name="card"></ion-icon>\n          </ion-col>\n          <ion-col col-9>\n            <p>Merchant Wallet Balance</p>\n            <h3>RM100,750</h3>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class="wallet-balance" col-6 text-center>\n            <ion-icon name="cube"></ion-icon>\n            <p>Inventory</p>\n          </ion-col>\n          <ion-col class="wallet-balance" col-6 text-center>\n            <ion-icon name="pulse"></ion-icon>\n            <p>Report</p>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\merchantlounge\merchantlounge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MerchantloungePage);
    return MerchantloungePage;
}());

//# sourceMappingURL=merchantlounge.js.map

/***/ }),

/***/ 969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantloungePageModule", function() { return MerchantloungePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__merchantlounge__ = __webpack_require__(1025);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MerchantloungePageModule = /** @class */ (function () {
    function MerchantloungePageModule() {
    }
    MerchantloungePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__merchantlounge__["a" /* MerchantloungePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__merchantlounge__["a" /* MerchantloungePage */]),
            ],
        })
    ], MerchantloungePageModule);
    return MerchantloungePageModule;
}());

//# sourceMappingURL=merchantlounge.module.js.map

/***/ })

});
//# sourceMappingURL=37.js.map