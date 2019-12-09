webpackJsonp([45],{

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(504);
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
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, navParams, mallApi, af) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mallApi = mallApi;
        this.af = af;
        this.mallApi.getMyaccount().subscribe(function (res) {
            if (res) {
                _this.profile = res;
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
        });
        // this.fbName = af.list('feedback');
    }
    FeedbackPage.prototype.open = function (page) {
        this.navCtrl.push(page);
    };
    FeedbackPage.prototype.setRoot = function (page) {
        this.navCtrl.setRoot(page);
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\feedback\feedback.html"*/'<!--\n  Generated template for the FeedbackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Feedback</ion-title>\n  </ion-navbar>\n  <ion-toolbar padding>\n      <p>We are always trying to improve what we do and your feedback is valuable.</p>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <!-- <ion-list>\n        <ion-item>\n          <ion-label stacked>Username <span>*</span></ion-label>\n          <ion-input placeholder="" required></ion-input>\n        </ion-item>\n      \n        <ion-item>\n            <ion-label stacked>Nama <span>*</span></ion-label>\n          <ion-input type="tel" placeholder="" required></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label color="primary" stacked>Email <span>*</span></ion-label>\n          <ion-input type="email" placeholder="" required></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary" stacked>Contact No. <span>*</span></ion-label>\n          <ion-input type="number" placeholder="" required></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label color="primary" stacked>Details <span>*</span></ion-label>\n          <ion-textarea placeholder="" required></ion-textarea>\n        </ion-item>\n      \n      </ion-list> -->\n\n    <div class="holds-the-iframe"><iframe width="300" height="470" src="https://www.hemico4u.com/hemico-app-feedback/" id="newsframe"></iframe></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\feedback\feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback__ = __webpack_require__(1017);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeedbackPageModule = /** @class */ (function () {
    function FeedbackPageModule() {
    }
    FeedbackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */]),
            ],
        })
    ], FeedbackPageModule);
    return FeedbackPageModule;
}());

//# sourceMappingURL=feedback.module.js.map

/***/ })

});
//# sourceMappingURL=45.js.map