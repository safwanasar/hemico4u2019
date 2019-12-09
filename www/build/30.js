webpackJsonp([30],{

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(100);
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
 * Generated class for the MyaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyaccountPage = /** @class */ (function () {
    function MyaccountPage(navCtrl, navParams, mallApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mallApi = mallApi;
        this.mallApi.getMyaccount().subscribe(function (res) {
            if (res) {
                _this.profile = res;
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
        });
    }
    MyaccountPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MyaccountPage");
    };
    MyaccountPage.prototype.logout = function () {
        this.mallApi.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    MyaccountPage.prototype.open = function (page) {
        this.navCtrl.push(page);
    };
    MyaccountPage.prototype.setRoot = function (page) {
        this.navCtrl.setRoot(page);
    };
    MyaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-myaccount",template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\myaccount\myaccount.html"*/'<!--\n  Generated template for the MyaccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header *ngIf="profile">\n\n  <ion-navbar>\n    <ion-title>My Account</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar text-center>\n    <ion-avatar>\n      <img src="{{profile.PROFILEPIC}}" />\n    </ion-avatar>\n    <h2>{{ profile.NAME }}</h2>\n    <ion-badge color="secondary">http://www.mymerchantmall.com/{{profile.USERID}} </ion-badge>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding *ngIf="profile">\n  <div class="float-content">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 text-center>\n          <h3>RM{{profile.EW_BALANCE}}</h3>\n          <p>E-Wallet Balance</p>\n        </ion-col>\n        <ion-col col-6 text-center>\n          <h3>RM{{profile.CW_BALANCE}}</h3>\n          <p>Coins Wallet Balance</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <button ion-button class="order-btn" (click)="open(\'OrderlistPage\')" icon-start full>\n    <ion-icon name="list-box"></ion-icon> Recent Orders\n  </button>\n\n  <ion-title>Personal Information</ion-title>\n\n  <ion-list>\n    <ion-item>\n      Edit Profile\n      <ion-icon item-end name="arrow-forward"></ion-icon>\n    </ion-item>\n    <ion-item>\n      Edit Shipping Address\n      <ion-icon item-end name="arrow-forward"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <div class="potential" text-center>\n    <h2>RM45,768.86</h2>\n    <p>Your September Potential Income</p>\n  </div>\n\n  <hr>\n\n  <div class="earning" text-center>\n    <h3>Purchase Now, Start Earning</h3>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <img src="assets/imgs/item-thumb.jpg" />\n          <h5>Addin Ilham Tablet Kunyah Pra Campuran</h5>\n          <button ion-button>Add to cart</button>\n        </ion-col>\n        <ion-col col-6>\n          <img src="assets/imgs/item-thumb.jpg" />\n          <h5>Addin Ilham Tablet Kunyah Pra Campuran</h5>\n          <button ion-button>Add to cart</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <img src="assets/imgs/item-thumb.jpg" />\n          <h5>Addin Ilham Tablet Kunyah Pra Campuran</h5>\n          <button ion-button>Add to cart</button>\n        </ion-col>\n        <ion-col col-6>\n          <img src="assets/imgs/item-thumb.jpg" />\n          <h5>Addin Ilham Tablet Kunyah Pra Campuran</h5>\n          <button ion-button>Add to cart</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <button ion-button block (click)="setRoot(\'HomePage\')">Go to Home page</button>\n  <button ion-button color="danger" block (click)="logout()">Log Out</button>\n</ion-content>'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\myaccount\myaccount.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */]])
    ], MyaccountPage);
    return MyaccountPage;
}());

//# sourceMappingURL=myaccount.js.map

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountPageModule", function() { return MyaccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myaccount__ = __webpack_require__(1032);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyaccountPageModule = /** @class */ (function () {
    function MyaccountPageModule() {
    }
    MyaccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myaccount__["a" /* MyaccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myaccount__["a" /* MyaccountPage */]),
            ],
        })
    ], MyaccountPageModule);
    return MyaccountPageModule;
}());

//# sourceMappingURL=myaccount.module.js.map

/***/ })

});
//# sourceMappingURL=30.js.map