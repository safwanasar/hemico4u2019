webpackJsonp([41],{

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsalesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(96);
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
 * Generated class for the GroupsalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupsalesPage = /** @class */ (function () {
    function GroupsalesPage(http, loading, mallApi, navCtrl, theInAppBrowser, navParams) {
        this.http = http;
        this.loading = loading;
        this.mallApi = mallApi;
        this.navCtrl = navCtrl;
        this.theInAppBrowser = theInAppBrowser;
        this.navParams = navParams;
        this.data = {};
        this.totalGroup = 0;
        this.groupSaleslists = [];
    }
    GroupsalesPage.prototype.openWithSystemBrowser = function (url) {
        var target = "_system";
        this.theInAppBrowser.create(url, target);
    };
    GroupsalesPage.prototype.ngOnInit = function () {
        this.loadData();
    };
    GroupsalesPage.prototype.loadData = function () {
        var _this = this;
        this.loading.showLoading();
        this.mallApi.getMyaccount().subscribe(function (account) {
            _this.mallApi.groupsales(account).subscribe(function (res) {
                var data = res.json();
                _this.totalGroup = data.TOTALGROUPSALES;
                _this.groupSaleslists = data.GROUPSALES;
                _this.loading.dismissLoading();
            }, function (err) {
                _this.loading.dismissLoading();
            });
        });
    };
    GroupsalesPage.prototype.logout = function () {
        this.mallApi.logout();
    };
    GroupsalesPage.prototype.open = function (page, params) {
        this.navCtrl.push(page, params);
    };
    GroupsalesPage.prototype.setRoot = function (page) {
        this.navCtrl.setRoot(page);
    };
    GroupsalesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-groupsales',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\groupsales\groupsales.html"*/'<!--\n  Generated template for the GroupsalesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Group Sales</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="income-summary" padding>\n    <h6>Total Group Sales</h6>\n    <h1>RM {{ totalGroup }}</h1>\n  </div>\n\n  <!-- /income-summary -->\n  <div class="list-title" padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 text-left>\n          <span>Month</span>\n        </ion-col>\n        <ion-col col-6 text-right>\n          <span>Total (RM)</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- /list-title -->\n  <div class="month-list" padding>\n    <ion-grid>\n\n      <ion-row *ngFor="let groupSaleslist of groupSaleslists">\n        <ion-col col-6 text-left>\n          <span>{{ groupSaleslist?.PERIOD }}</span>\n        </ion-col>\n        <ion-col col-6 text-right>\n          <span>{{ groupSaleslist?.SALES }}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 text-center>\n          <button ion-button (click)="openWithSystemBrowser(\'https://agent.hemico4u.com\')" color="light">See Detail Reports</button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <img class="trans_logo" src="assets/imgs/hemico-watermark.png" />\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\groupsales\groupsales.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], GroupsalesPage);
    return GroupsalesPage;
}());

//# sourceMappingURL=groupsales.js.map

/***/ }),

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsalesPageModule", function() { return GroupsalesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupsales__ = __webpack_require__(1021);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupsalesPageModule = /** @class */ (function () {
    function GroupsalesPageModule() {
    }
    GroupsalesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__groupsales__["a" /* GroupsalesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__groupsales__["a" /* GroupsalesPage */]),
            ],
        })
    ], GroupsalesPageModule);
    return GroupsalesPageModule;
}());

//# sourceMappingURL=groupsales.module.js.map

/***/ })

});
//# sourceMappingURL=41.js.map