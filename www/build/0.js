webpackJsonp([0],{

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofilePageModule", function() { return UserprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userprofile__ = __webpack_require__(1062);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserprofilePageModule = /** @class */ (function () {
    function UserprofilePageModule() {
    }
    UserprofilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__userprofile__["a" /* UserprofilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__userprofile__["a" /* UserprofilePage */]),
            ],
        })
    ], UserprofilePageModule);
    return UserprofilePageModule;
}());

//# sourceMappingURL=userprofile.module.js.map

/***/ }),

/***/ 1062:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser_ngx__ = __webpack_require__(503);
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
 * Generated class for the UserprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserprofilePage = /** @class */ (function () {
    function UserprofilePage(storageProvider, loading, navCtrl, mallApi, theInAppBrowser, navParams) {
        this.storageProvider = storageProvider;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.mallApi = mallApi;
        this.theInAppBrowser = theInAppBrowser;
        this.navParams = navParams;
        this.profile = {};
    }
    UserprofilePage.prototype.openWithSystemBrowser = function (url) {
        var target = "_system";
        this.theInAppBrowser.create(url, target);
    };
    UserprofilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.loading.showLoading();
        this.mallApi.getMyaccount().subscribe(function (res) {
            if (res) {
                _this.profile = res;
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
            _this.loading.dismissLoading();
        }, function (err) {
            _this.loading.dismissLoading();
        });
    };
    UserprofilePage.prototype.open = function (page) {
        this.navCtrl.push(page);
    };
    UserprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserprofilePage');
    };
    UserprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userprofile',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\userprofile\userprofile.html"*/'<!--\n  Generated template for the UserprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>User Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-avatar>\n    <ion-img item-center style="width: 100px; height: 100px;" src="{{ profile?.PROFILEPIC }}"></ion-img>\n  </ion-avatar>\n  <h3 text-center>{{ profile?.USERID }}</h3>\n  <h5 text-center>{{ profile?.CITY }}, {{ profile?.STATE }}</h5>\n  <div padding class="contain_profile">\n    <ion-list>\n      <ion-list-header>\n        Name\n      </ion-list-header>\n      <ion-item>{{ profile?.NAME }}</ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        Agent ID\n      </ion-list-header>\n      <ion-item>{{ profile?.AGENTID }}</ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        No. Tel\n      </ion-list-header>\n      <ion-item>{{ profile?.TEL_MOBILE }}</ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        Address\n      </ion-list-header>\n      <ion-item>{{ profile?.ADDRESS1 }}, {{ profile?.POSTCODE }} {{ profile?.CITY }}, {{ profile?.STATE }}</ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        Protection Status\n      </ion-list-header>\n      <ion-item>{{ profile?.PROTECTIONSTATUS }}</ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        Protection Period\n      </ion-list-header>\n      <ion-item>{{ profile?.PROTECTIONPERIOD }}</ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        Protection Type\n      </ion-list-header>\n      <ion-item>{{ profile?.PROTECTIONTYPE }}</ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        Protection Activated\n      </ion-list-header>\n      <ion-item>{{ profile?.PROTECTIONACTIVATED }}</ion-item>\n    </ion-list>\n  </div>\n  <button ion-button (click)="openWithSystemBrowser(\'https://agent.hemico4u.com\')" color="light" class="cta_btn" block>Edit Profile</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\userprofile\userprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], UserprofilePage);
    return UserprofilePage;
}());

//# sourceMappingURL=userprofile.js.map

/***/ })

});
//# sourceMappingURL=0.js.map