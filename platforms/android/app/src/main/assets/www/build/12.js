webpackJsonp([12],{

/***/ 1050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductlistPage; });
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
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductlistPage = /** @class */ (function () {
    function ProductlistPage(navCtrl, navParams, mallApi) {
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
    ProductlistPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProductlistPage");
    };
    ProductlistPage.prototype.logout = function () {
        this.mallApi.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    ProductlistPage.prototype.open = function (page) {
        this.navCtrl.push(page);
    };
    ProductlistPage.prototype.setRoot = function (page) {
        this.navCtrl.setRoot(page);
    };
    ProductlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productlist',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\productlist\productlist.html"*/'<!--\n  Generated template for the ProductlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Product Categories</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="home-content">\n  <ion-grid padding class="home-menu">\n    <ion-row>\n\n    <ion-col col-6>\n        <ion-card (click)="open(\'ProductgeneralPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/general.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            General Items\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProductaddinPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/addin.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            Addin\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProductperformancePage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/performance.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            Performance\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProductpuspaPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/periuk-tanah.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            Periuk Tanah\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProducthemicoangPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/hemico-ageless.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            Hemico Ageless\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProducthemicoPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/hemico.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            Hemico\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProductalamiPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/alami.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            Alami\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProductalilahPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/alilah.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            Alilah Anbar\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProductneutralenePage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/neutralene.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            Neutralene\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProductinspiralPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/inspiral.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            Inspiral\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProducthemicocolorPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/hemico-colours.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            Hemico Colour\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProducthemicoscentPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/hemico-sence.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            Hemico Scent\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProductmyhomePage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/myhome.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            Myhome\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProductpkabooPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/pkaboo.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            P\'Kaboo\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'Product3serangkaiPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/tiga-serangkai.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            3 Serangkai\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProductthreeleafPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/threeleaf.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            Threeleaf\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProductnurskinPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/nur-skin-care.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            Nur Skin Care\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProductohuruPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/ohuru.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            Ohuru\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProductleprimeraPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/brands/leprimera2.jpg" style="margin:0 auto; display:block;" />\n          </ion-card-header>\n          <ion-card-content>\n            Le\' Primera\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\productlist\productlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */]])
    ], ProductlistPage);
    return ProductlistPage;
}());

//# sourceMappingURL=productlist.js.map

/***/ }),

/***/ 994:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistPageModule", function() { return ProductlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productlist__ = __webpack_require__(1050);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductlistPageModule = /** @class */ (function () {
    function ProductlistPageModule() {
    }
    ProductlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productlist__["a" /* ProductlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productlist__["a" /* ProductlistPage */]),
            ],
        })
    ], ProductlistPageModule);
    return ProductlistPageModule;
}());

//# sourceMappingURL=productlist.module.js.map

/***/ })

});
//# sourceMappingURL=12.js.map