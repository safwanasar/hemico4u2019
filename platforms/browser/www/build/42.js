webpackJsonp([42],{

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetpasswordsuccessPage; });
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
 * Generated class for the ForgetpasswordsuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetpasswordsuccessPage = /** @class */ (function () {
    function ForgetpasswordsuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgetpasswordsuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetpasswordsuccessPage');
    };
    ForgetpasswordsuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgetpasswordsuccess',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\forgetpasswordsuccess\forgetpasswordsuccess.html"*/'<!--\n  Generated template for the ForgetpasswordsuccessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="signup" class="signupNav">\n    <ion-title>Forget Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col class="titleForget">\n      <img src="assets/imgs/forget-password-icon-success.png" style="margin:50px auto; display:block;width:60%;"/>\n      <h2>Whoo Whoo! Success</h2>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class="description">\n      News password has been successfully reset and sent to your email.\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <button ion-button icon-end class="submit-btn button" full>Login Now <ion-icon name="arrow-round-forward"></ion-icon></button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\forgetpasswordsuccess\forgetpasswordsuccess.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ForgetpasswordsuccessPage);
    return ForgetpasswordsuccessPage;
}());

//# sourceMappingURL=forgetpasswordsuccess.js.map

/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpasswordsuccessPageModule", function() { return ForgetpasswordsuccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgetpasswordsuccess__ = __webpack_require__(1020);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgetpasswordsuccessPageModule = /** @class */ (function () {
    function ForgetpasswordsuccessPageModule() {
    }
    ForgetpasswordsuccessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgetpasswordsuccess__["a" /* ForgetpasswordsuccessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgetpasswordsuccess__["a" /* ForgetpasswordsuccessPage */]),
            ],
        })
    ], ForgetpasswordsuccessPageModule);
    return ForgetpasswordsuccessPageModule;
}());

//# sourceMappingURL=forgetpasswordsuccess.module.js.map

/***/ })

});
//# sourceMappingURL=42.js.map