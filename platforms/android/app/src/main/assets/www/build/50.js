webpackJsonp([50],{

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BonuslistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(98);
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
 * Generated class for the OrderlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BonuslistPage = /** @class */ (function () {
    function BonuslistPage(http, loading, mallApi, navCtrl, navParams) {
        this.http = http;
        this.loading = loading;
        this.mallApi = mallApi;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.totalIncome = 0;
        this.monthlyIncomes = [];
    }
    BonuslistPage.prototype.ngOnInit = function () {
        this.loadData();
    };
    BonuslistPage.prototype.loadData = function () {
        var _this = this;
        this.loading.showLoading();
        this.mallApi.getMyaccount().subscribe(function (account) {
            _this.mallApi.bonuslist(account).subscribe(function (res) {
                var data = res.json();
                _this.totalIncome = data.TOTALINCOME;
                _this.monthlyIncomes = data.MONTHINCOME;
                _this.loading.dismissLoading();
            }, function (err) {
                _this.loading.dismissLoading();
            });
        });
    };
    BonuslistPage.prototype.openOrder = function (id) {
        this.navCtrl.push("OrderdetailPage", { orderID: id });
    };
    BonuslistPage.prototype.logout = function () {
        this.mallApi.logout();
    };
    BonuslistPage.prototype.open = function (page, params) {
        this.navCtrl.push(page, params);
    };
    BonuslistPage.prototype.setRoot = function (page) {
        this.navCtrl.setRoot(page);
    };
    BonuslistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-bonuslist",template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\bonuslist\bonuslist.html"*/'<!--\n  Generated template for the BonuslistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Income</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="income-summary" padding>\n    <h6>Total Income</h6>\n    <h1>RM {{ totalIncome }}</h1>\n  </div>\n\n  <!-- /income-summary -->\n  <div class="list-title" padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 text-left>\n          <span>Month</span>\n        </ion-col>\n        <ion-col col-6 text-right>\n          <span>Amount (RM)</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- /list-title -->\n  <div class="month-list" padding>\n    <ion-grid>\n\n      <ion-row *ngFor="let monthlyIncome of monthlyIncomes">\n        <ion-col col-6 text-left (click)="open(\'BonusdetailsPage\', {PERIOD: monthlyIncome?.PERIOD, AMOUNT: monthlyIncome?.AMOUNT})">\n          <span style="text-decoration: underline">{{ monthlyIncome?.PERIOD }}</span>\n        </ion-col>\n        <ion-col col-6 text-right>\n          <span>{{ monthlyIncome?.AMOUNT }}</span>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <img class="trans_logo" src="assets/imgs/hemico-watermark.png" />\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\bonuslist\bonuslist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BonuslistPage);
    return BonuslistPage;
}());

//# sourceMappingURL=bonuslist.js.map

/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonuslistPageModule", function() { return BonuslistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bonuslist__ = __webpack_require__(1012);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BonuslistPageModule = /** @class */ (function () {
    function BonuslistPageModule() {
    }
    BonuslistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bonuslist__["a" /* BonuslistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bonuslist__["a" /* BonuslistPage */]),
            ],
        })
    ], BonuslistPageModule);
    return BonuslistPageModule;
}());

//# sourceMappingURL=bonuslist.module.js.map

/***/ })

});
//# sourceMappingURL=50.js.map