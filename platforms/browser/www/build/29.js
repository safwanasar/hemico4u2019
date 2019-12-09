webpackJsonp([29],{

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyworkplacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notifications_notifications__ = __webpack_require__(99);
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
 * Generated class for the MyworkplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyworkplacePage = /** @class */ (function () {
    function MyworkplacePage(storageProvider, loading, navCtrl, navParams, mallApi, notificationsProvider) {
        this.storageProvider = storageProvider;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mallApi = mallApi;
        this.notificationsProvider = notificationsProvider;
        this.profile = {};
    }
    MyworkplacePage.prototype.logout = function () {
        var _this = this;
        this.loading.showLoading('loading...');
        return Promise.all([
            this.mallApi.logout(),
        ]).then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            _this.loading.dismissLoading();
        }).catch(function (err) {
            _this.loading.dismissLoading();
            _this.loading.presentToast('Error Unable to logout!');
        });
    };
    MyworkplacePage.prototype.open = function (page) {
        this.navCtrl.push(page);
    };
    MyworkplacePage.prototype.setRoot = function (page) {
        this.navCtrl.setRoot(page);
    };
    MyworkplacePage.prototype.notificationList = function () {
        // let NotiId = this.getRandomInt(5);
        // this.notificationsProvider.save(
        //   `Task ${NotiId}`,
        //   'Task Body Lorem ipsum dolur',
        //   NotiId,
        //   'https://www.hemico4u.com/konsep-perniagaan/',
        //   'https://www.hemico4u.com/wp-content/uploads/2018/12/Selamat-Tahun-Baru-01.jpg',
        // ).then((v) => {
        //   this.navCtrl.push('NotificationsPage');
        // });
        this.navCtrl.push('NotificationsPage');
    };
    MyworkplacePage.prototype.getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    MyworkplacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myworkplace',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\myworkplace\myworkplace.html"*/'<!--\n  Generated template for the MyworkplacePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>MY WorkPlace</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="home-content">\n  <!-- <button ion-button small color="light" menuClose (click)="open(\'UserprofilePage\')" class="profile_btn">View Profile</button> -->\n  <ion-grid padding class="home-menu">\n\n    <ion-row>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'BonuslistPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/income.png" style="margin:0 auto; display:block; width:50%;" />\n          </ion-card-header>\n          <ion-card-content>\n            Income\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'GroupsalesPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/iconfinder_emblem-money-64_55521.png" style="margin:0 auto; display:block; width:50%;" />\n          </ion-card-header>\n          <ion-card-content>\n            Group Sales\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'NewagentcountPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/agent.png" style="margin:0 auto; display:block; width:50%;" />\n          </ion-card-header>\n          <ion-card-content>\n            Agent\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'EwalletPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/kisspng-wallet-icon-wallet-5a744d477f7209.241745381517571399522.png" style="margin:0 auto; display:block; width:50%;" />\n          </ion-card-header>\n          <ion-card-content>\n            Hemico Cash\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      \n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\myworkplace\myworkplace.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_notifications_notifications__["a" /* NotificationsProvider */]])
    ], MyworkplacePage);
    return MyworkplacePage;
}());

//# sourceMappingURL=myworkplace.js.map

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyworkplacePageModule", function() { return MyworkplacePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myworkplace__ = __webpack_require__(1032);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyworkplacePageModule = /** @class */ (function () {
    function MyworkplacePageModule() {
    }
    MyworkplacePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myworkplace__["a" /* MyworkplacePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myworkplace__["a" /* MyworkplacePage */]),
            ],
        })
    ], MyworkplacePageModule);
    return MyworkplacePageModule;
}());

//# sourceMappingURL=myworkplace.module.js.map

/***/ })

});
//# sourceMappingURL=29.js.map