webpackJsonp([43],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetpasswordPage; });
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
 * Generated class for the ForgetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetpasswordPage = /** @class */ (function () {
    function ForgetpasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgetpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetpasswordPage');
    };
    ForgetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgetpassword',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\forgetpassword\forgetpassword.html"*/'<!--\n  Generated template for the ForgetpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="signup" class="signupNav">\n    <ion-title>Forget Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col class="titleForget">\n      <img src="assets/imgs/forget-password-icon.png" style="margin:50px auto; display:block;width:60%;"/>\n      <h2>It\'s okay. Reset your password</h2>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class="description">\n      Enter your information below and we will generate your new password and send it to your email.\n    </ion-col>\n  </ion-row>\n  <form>\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item class="label_app">\n            Email address:\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" required></ion-input>\n            </ion-item>\n            <ion-item class="label_app">\n            Your Answer:\n            </ion-item>\n            <ion-item>\n              <ion-label>Security Question</ion-label>\n              <ion-select>\n                <ion-option value="f">Option 1</ion-option>\n                <ion-option value="m">Option 2</ion-option>\n              </ion-select>\n            </ion-item>\n            <ion-item class="label_app">\n            Your Answer:\n            </ion-item>\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" required></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn button icon icon-right ion-home" full type="submit">Send My New Password</button>\n        </ion-col>\n      </ion-row>\n\n\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\forgetpassword\forgetpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ForgetpasswordPage);
    return ForgetpasswordPage;
}());

//# sourceMappingURL=forgetpassword.js.map

/***/ }),

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpasswordPageModule", function() { return ForgetpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgetpassword__ = __webpack_require__(1019);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgetpasswordPageModule = /** @class */ (function () {
    function ForgetpasswordPageModule() {
    }
    ForgetpasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgetpassword__["a" /* ForgetpasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgetpassword__["a" /* ForgetpasswordPage */]),
            ],
        })
    ], ForgetpasswordPageModule);
    return ForgetpasswordPageModule;
}());

//# sourceMappingURL=forgetpassword.module.js.map

/***/ })

});
//# sourceMappingURL=43.js.map