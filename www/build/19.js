webpackJsonp([19],{

/***/ 1043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductgeneralPage; });
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


var ProductgeneralPage = /** @class */ (function () {
    function ProductgeneralPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductgeneralPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductgeneralPage');
    };
    ProductgeneralPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productgeneral',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\productgeneral\productgeneral.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>General Items</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <img src="assets/imgs/general-starter-pack-1.jpg" style="margin:0 auto; display:block; width:80%;" />\n   <h3>Hemico Starter Pack 1 (Red Box)</h3>\n   <div class="pricing">\n     <div class="divTable">\n      <div class="divTableBody">\n      <div class="divTableRow">\n      <div class="divTableCell">Country</div>\n      <div class="divTableCell">Agent Price</div>\n      <div class="divTableCell">Commission Price</div>\n      <div class="divTableCell">Customer Price</div>\n      </div>\n      <div class="divTableRow">\n      <div class="divTableCell">West Malaysia</div>\n      <div class="divTableCell">RM65.00</div>\n      <div class="divTableCell">RM65.00</div>\n      <div class="divTableCell">RM81.00</div>\n      </div>\n      <div class="divTableRow">\n      <div class="divTableCell">East Malaysia</div>\n      <div class="divTableCell">RM70.00</div>\n      <div class="divTableCell">RM65.00</div>\n      <div class="divTableCell">RM87.00</div>\n      </div>\n      </div>\n      </div>\n   </div><!-- /pricing -->\n   <div class="product-desc">\n     <p>Hemico Starter Pack 1 mengandungi sample produk berikut:</p>\n     <ul>\n      <li>Addin Goats Milk (7 Sachet)</li>\n      <li>Addin Premium (7 Sachet)</li>\n      <li>Performance Peptide Coffee (2 Sachet)</li>\n      <li>Performance Peptide Tea (2 Sachet)</li>\n      <li>Alami Detox (7 Sachet)</li>\n      <li>Addin Cocoa (2 Sachet)</li>\n      <li>Addin Kids - Chocolate (3 Sachet)</li>\n      <li>Addin Kids - Strawberry (3 Sachet)</li>\n      <li>Kids - Natural (3 Sachet)</li>\n    </ul>\n   </div><!-- /product-desc -->\n  </ion-list>\n\n  <ion-list>\n    <img src="assets/imgs/general-starter-pack-2.jpg" style="margin:0 auto; display:block; width:80%;" />\n   <h3>Hemico Starter Pack 2 (Yellow Box)</h3>\n   <div class="pricing">\n     <div class="divTable">\n      <div class="divTableBody">\n      <div class="divTableRow">\n      <div class="divTableCell">Country</div>\n      <div class="divTableCell">Agent Price</div>\n      <div class="divTableCell">Commission Price</div>\n      <div class="divTableCell">Customer Price</div>\n      </div>\n      <div class="divTableRow">\n      <div class="divTableCell">West Malaysia</div>\n      <div class="divTableCell">RM100.00</div>\n      <div class="divTableCell">RM100.00</div>\n      <div class="divTableCell">RM125.00</div>\n      </div>\n      <div class="divTableRow">\n      <div class="divTableCell">East Malaysia</div>\n      <div class="divTableCell">RM105.00</div>\n      <div class="divTableCell">RM100.00</div>\n      <div class="divTableCell">RM131.00</div>\n      </div>\n      </div>\n      </div>\n   </div><!-- /pricing -->\n   <div class="product-desc">\n     <p>Hemico Starter Pack 2 mengandungi sample produk berikut:</p>\n     <ul>\n      <li>Jus 3 Serangkai (100ml) - 2 botol </li>\n      <li>Jus Addin Ilham (100ml) - 2 botol</li>\n      <li>Threeleaf Stevia (5ml) - 1 botol</li>\n      <li>Periuk Tanah Puspa Wangi - 7 sachet</li>\n      <li>Periuk Tanah Aduka Kencana - 3 sachet</li>\n    </ul>\n   </div><!-- /product-desc -->\n  </ion-list>\n\n  <ion-list>\n    <img src="assets/imgs/general-business-bib.jpg" style="margin:0 auto; display:block; width:80%;" />\n   <h3>Hemico Bussiness In Box (BIB)</h3>\n   <div class="pricing">\n     <div class="divTable">\n      <div class="divTableBody">\n      <div class="divTableRow">\n      <div class="divTableCell">Country</div>\n      <div class="divTableCell">Agent Price</div>\n      <div class="divTableCell">Commission Price</div>\n      <div class="divTableCell">Customer Price</div>\n      </div>\n      <div class="divTableRow">\n      <div class="divTableCell">West Malaysia</div>\n      <div class="divTableCell">RM165.00</div>\n      <div class="divTableCell">RM165.00</div>\n      <div class="divTableCell">RM206.00</div>\n      </div>\n      <div class="divTableRow">\n      <div class="divTableCell">East Malaysia</div>\n      <div class="divTableCell">RM170.00</div>\n      <div class="divTableCell">RM165.00</div>\n      <div class="divTableCell">RM212.00</div>\n      </div>\n      </div>\n      </div>\n   </div><!-- /pricing -->\n   <div class="product-desc">\n     <p>Hemico Bussiness In Box (BIB)</p>\n     <ul>\n      <li>Hemico Starter Pack 1</li>\n      <li>Hemico Starter Pack 2 </li>\n      <li>Hemico Paper Bag (FOC)</li>\n    </ul>\n   </div><!-- /product-desc -->\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\productgeneral\productgeneral.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductgeneralPage);
    return ProductgeneralPage;
}());

//# sourceMappingURL=productgeneral.js.map

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductgeneralPageModule", function() { return ProductgeneralPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productgeneral__ = __webpack_require__(1043);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductgeneralPageModule = /** @class */ (function () {
    function ProductgeneralPageModule() {
    }
    ProductgeneralPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productgeneral__["a" /* ProductgeneralPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productgeneral__["a" /* ProductgeneralPage */]),
            ],
        })
    ], ProductgeneralPageModule);
    return ProductgeneralPageModule;
}());

//# sourceMappingURL=productgeneral.module.js.map

/***/ })

});
//# sourceMappingURL=19.js.map