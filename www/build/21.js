webpackJsonp([21],{

/***/ 1041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductalilahPage; });
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
 * Generated class for the ProductalilahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductalilahPage = /** @class */ (function () {
    function ProductalilahPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductalilahPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductalilahPage');
    };
    ProductalilahPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productalilah',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\productalilah\productalilah.html"*/'<!--\n  Generated template for the ProductalilahPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ALILAH ANBAR</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n   <img src="assets/imgs/alilah-anbar.jpg" style="margin:0 auto; display:block; width:80%;" />\n   <h3>Alilah Anbar Perfume (Set)</h3>\n   <div class="pricing">\n     <div class="divTable">\n      <div class="divTableBody">\n      <div class="divTableRow">\n      <div class="divTableCell">Country</div>\n      <div class="divTableCell">Agent Price</div>\n      <div class="divTableCell">Commission Price</div>\n      <div class="divTableCell">Customer Price</div>\n      </div>\n      <div class="divTableRow">\n      <div class="divTableCell">West Malaysia</div>\n      <div class="divTableCell">RM 120.00</div>\n      <div class="divTableCell">RM 60.00</div>\n      <div class="divTableCell">RM 150.00</div>\n      </div>\n      <div class="divTableRow">\n      <div class="divTableCell">East Malaysia</div>\n      <div class="divTableCell">RM 144.00</div>\n      <div class="divTableCell">RM 60.00</div>\n      <div class="divTableCell">RM 180.00</div>\n      </div>\n      </div>\n      </div>\n   </div><!-- /pricing -->\n   <div class="product-desc">\n     <h4>12 Botol Wangian:</h4>\n     <ol>\n<li>Medina (ME01)</li>\n<li>Alia 02518 (AL02)</li>\n<li>Black Oud 03447 (BO03)</li>\n<li>Black Oud (BL04)</li>\n<li>Fragrance FF 2261E (FE05)</li>\n<li>Fragrance F 2307 ECO (FC06)</li>\n<li>Beautiful (BE07)</li>\n<li>Ajman 02504 (AJ08)</li>\n<li>Sexy (SE09)</li>\n<li>Xanthic Ff 2208 Eco (XT10)</li>\n<li>Secret Charm (SC11)</li>\n<li>Oriental (OR12)</li>\n</ol>\n\n   </div><!-- /product-desc -->\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\productalilah\productalilah.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductalilahPage);
    return ProductalilahPage;
}());

//# sourceMappingURL=productalilah.js.map

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductalilahPageModule", function() { return ProductalilahPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productalilah__ = __webpack_require__(1041);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductalilahPageModule = /** @class */ (function () {
    function ProductalilahPageModule() {
    }
    ProductalilahPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productalilah__["a" /* ProductalilahPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productalilah__["a" /* ProductalilahPage */]),
            ],
        })
    ], ProductalilahPageModule);
    return ProductalilahPageModule;
}());

//# sourceMappingURL=productalilah.module.js.map

/***/ })

});
//# sourceMappingURL=21.js.map