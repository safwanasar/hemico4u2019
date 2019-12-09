webpackJsonp([44],{

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackdonePage; });
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
 * Generated class for the FeedbackdonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackdonePage = /** @class */ (function () {
    function FeedbackdonePage(navCtrl, navParams, mallApi) {
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
    FeedbackdonePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProductlistPage");
    };
    FeedbackdonePage.prototype.open = function (page) {
        this.navCtrl.push(page);
    };
    FeedbackdonePage.prototype.setRoot = function (page) {
        this.navCtrl.setRoot(page);
    };
    FeedbackdonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedbackdone',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\feedbackdone\feedbackdone.html"*/'<!--\n  Generated template for the FeedbackdonePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding text-center>\n  <h1>Feedback Received</h1>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam, diam sed pulvinar mattis, turpis sem lacinia orci, ac blandit sapien quam et dolor.</p>\n  <img src="assets/imgs/feedback-thanks.jpg" style="margin:30px auto; display:block;width:60%;"/>\n  <button ion-button class="submit-btn send-feedback" full (click)="setRoot(\'HomePage\')">Back to home</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\feedbackdone\feedbackdone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */]])
    ], FeedbackdonePage);
    return FeedbackdonePage;
}());

//# sourceMappingURL=feedbackdone.js.map

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackdonePageModule", function() { return FeedbackdonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedbackdone__ = __webpack_require__(1018);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeedbackdonePageModule = /** @class */ (function () {
    function FeedbackdonePageModule() {
    }
    FeedbackdonePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feedbackdone__["a" /* FeedbackdonePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feedbackdone__["a" /* FeedbackdonePage */]),
            ],
        })
    ], FeedbackdonePageModule);
    return FeedbackdonePageModule;
}());

//# sourceMappingURL=feedbackdone.module.js.map

/***/ })

});
//# sourceMappingURL=44.js.map