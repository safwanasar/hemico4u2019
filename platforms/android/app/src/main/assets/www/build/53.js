webpackJsonp([53],{

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BonusdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser_ngx__ = __webpack_require__(503);
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
 * Generated class for the BonusdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BonusdetailsPage = /** @class */ (function () {
    function BonusdetailsPage(loading, navCtrl, navParams, http, theInAppBrowser, mallApi) {
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.theInAppBrowser = theInAppBrowser;
        this.mallApi = mallApi;
        this.period = "";
        this.amount = 0;
        this.bonusStatements = [];
    }
    BonusdetailsPage.prototype.openWithSystemBrowser = function (url) {
        var target = "_system";
        this.theInAppBrowser.create(url, target);
    };
    BonusdetailsPage.prototype.ionViewDidLoad = function () {
        this.period = this.navParams.get('PERIOD');
        this.amount = this.navParams.get('AMOUNT');
        this.getBonusStatements();
    };
    BonusdetailsPage.prototype.getBonusStatements = function () {
        var _this = this;
        this.loading.showLoading();
        var month = this.getMonthFromString(this.period);
        var year = this.getYearFromString(this.period);
        this.mallApi.getMyaccount().subscribe(function (account) {
            account['MONTH'] = month;
            account['YEAR'] = year;
            _this.mallApi.bonusdetail(account)
                .subscribe(function (res) {
                var data = res.json();
                _this.bonusStatements = data.BONUSES;
                _this.loading.dismissLoading();
            }, function (err) {
                _this.loading.dismissLoading();
            });
        });
    };
    BonusdetailsPage.prototype.getMonthFromString = function (mon) {
        return new Date(Date.parse(mon + " 1, 2019")).getMonth() + 1;
    };
    BonusdetailsPage.prototype.getYearFromString = function (year) {
        return new Date(Date.parse("January 1, " + year)).getFullYear();
    };
    BonusdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bonusdetails',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\bonusdetails\bonusdetails.html"*/'<!--\n  Generated template for the BonusdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Bonus Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="income-summary" padding>\n    <h6>Statement for</h6>\n    <h1>{{ period }}</h1>\n  </div>\n\n  <!-- /income-summary -->\n  <div class="list-title" padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 text-left>\n          <span>Type of Income</span>\n        </ion-col>\n        <ion-col col-6 text-right>\n          <span>Amount (RM)</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <!-- /list-title -->\n\n  <div class="month-list" padding>\n    <ion-grid>\n\n      <ion-row *ngFor="let bonusStatement of bonusStatements">\n        <ion-col col-6 text-left>\n          <span>{{ bonusStatement?.BONUSTYPE }}</span>\n        </ion-col>\n        <ion-col col-6 text-right>\n          <span>{{ bonusStatement?.BONUSAMOUNT }}</span>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <!-- /month-list -->\n\n  <div padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 text-center>\n          <button ion-button (click)="openWithSystemBrowser(\'https://agent.hemico4u.com\')" color="light">See Detail Reports</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <img class="trans_logo" src="assets/imgs/hemico-watermark.png" />\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\bonusdetails\bonusdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */]])
    ], BonusdetailsPage);
    return BonusdetailsPage;
}());

//# sourceMappingURL=bonusdetails.js.map

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusdetailsPageModule", function() { return BonusdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bonusdetails__ = __webpack_require__(1009);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BonusdetailsPageModule = /** @class */ (function () {
    function BonusdetailsPageModule() {
    }
    BonusdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bonusdetails__["a" /* BonusdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bonusdetails__["a" /* BonusdetailsPage */]),
            ],
        })
    ], BonusdetailsPageModule);
    return BonusdetailsPageModule;
}());

//# sourceMappingURL=bonusdetails.module.js.map

/***/ })

});
//# sourceMappingURL=53.js.map