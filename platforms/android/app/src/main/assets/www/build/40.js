webpackJsonp([40],{

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketingplanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** import { MerchantMallProvider } from "../../providers/merchant-mall/merchant-mall";
 * Generated class for the MarketingplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MarketingplanPage = /** @class */ (function () {
    function MarketingplanPage(navCtrl, navParams, document) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.document = document;
    }
    MarketingplanPage.prototype.openLocalPdf = function () {
        var options = {
            title: 'Marketing Plan'
        };
        this.document.viewDocument('assets/marketing-plan-2019.pdf', 'application/pdf', options);
    };
    MarketingplanPage.prototype.open = function (page) {
        this.navCtrl.push(page);
    };
    MarketingplanPage.prototype.setRoot = function (page) {
        this.navCtrl.setRoot(page);
    };
    MarketingplanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarketingplanPage');
    };
    MarketingplanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-marketingplan',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\marketingplan\marketingplan.html"*/'  <!--\n  Generated template for the MarketingplanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Marketing Plan</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content fullscreen>\n  <ion-slides pager zoom>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_01.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_02.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_03.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_04.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_05.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_06.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_07.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_08.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_09.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_10.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_11.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_12.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_13.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_14.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_15.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_16.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_17.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_18.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_19.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_20.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_21.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_22.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_23.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_24.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_25.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_26.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_27.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_28.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_29.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_30.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_31.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_32.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_33.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_34.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_35.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_36.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_37.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_38.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_39.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="swiper-zoom-container">\n          <img src="assets/imgs/pelan-pemasaran/pelan-pemasaran_Page_40.jpg" style="margin:0 auto; display:block;" />\n        </div>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\marketingplan\marketingplan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__["a" /* DocumentViewer */]])
    ], MarketingplanPage);
    return MarketingplanPage;
}());

//# sourceMappingURL=marketingplan.js.map

/***/ }),

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingplanPageModule", function() { return MarketingplanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marketingplan__ = __webpack_require__(1022);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MarketingplanPageModule = /** @class */ (function () {
    function MarketingplanPageModule() {
    }
    MarketingplanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__marketingplan__["a" /* MarketingplanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__marketingplan__["a" /* MarketingplanPage */]),
            ],
        })
    ], MarketingplanPageModule);
    return MarketingplanPageModule;
}());

//# sourceMappingURL=marketingplan.module.js.map

/***/ })

});
//# sourceMappingURL=40.js.map