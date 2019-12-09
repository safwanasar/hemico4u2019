webpackJsonp([47],{

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedPage; });
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
 * Generated class for the CompletedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompletedPage = /** @class */ (function () {
    function CompletedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CompletedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompletedPage');
    };
    CompletedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-completed',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\completed\completed.html"*/'<!--\n  Generated template for the CompletedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <h1>Thank You</h1>\n        <h3>for your order with MyMerchant Mall</h3>\n        <img src="assets/imgs/completed-icon.jpg" style="margin:30px auto; display:block;"/>\n        <h4>Your Order ID:</h4>\n        <h2>#SC124535</h2>\n        <button ion-button color="light" block>Track My Order</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button icon-end color="light" full>Continue Shopping <ion-icon name="arrow-round-forward"></ion-icon></button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\completed\completed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CompletedPage);
    return CompletedPage;
}());

//# sourceMappingURL=completed.js.map

/***/ }),

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedPageModule", function() { return CompletedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__completed__ = __webpack_require__(1015);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompletedPageModule = /** @class */ (function () {
    function CompletedPageModule() {
    }
    CompletedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__completed__["a" /* CompletedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__completed__["a" /* CompletedPage */]),
            ],
        })
    ], CompletedPageModule);
    return CompletedPageModule;
}());

//# sourceMappingURL=completed.module.js.map

/***/ })

});
//# sourceMappingURL=47.js.map