webpackJsonp([25],{

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_merchant_mall_merchant_mall__ = __webpack_require__(72);
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
 * Generated class for the OrderlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderlistPage = /** @class */ (function () {
    function OrderlistPage(http, mallApi, navCtrl, navParams) {
        this.http = http;
        this.mallApi = mallApi;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.orders = [];
        this.orderIDs = [];
    }
    OrderlistPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad OrderlistPage");
        this.loadData();
    };
    OrderlistPage.prototype.loadData = function () {
        var _this = this;
        this.mallApi.getMyaccount().subscribe(function (account) {
            _this.mallApi.orderlist(account).subscribe(function (res) {
                _this.data = JSON.parse(res["_body"]);
                _this.orders = _this.data["ORDER"];
                console.log(_this.data);
                _this.orderIDs = Object.keys(_this.orders);
                console.log(_this.orders);
            });
        });
    };
    OrderlistPage.prototype.openOrder = function (id) {
        this.navCtrl.push("OrderdetailPage", { orderID: id });
    };
    OrderlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-orderlist",template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\orderlist\orderlist.html"*/'<!--\n  Generated template for the OrderlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Orders</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let orderID of orderIDs" (click)="openOrder(orderID)">\n      <ion-icon name="basket" item-start color="green"></ion-icon>\n      <h4>Order: {{orderID}}</h4>\n      <p>{{orders[orderID][\'ORDER_STATUS\']}}</p>\n      <ion-note text-right item-end>\n        {{orders[orderID][\'ORDER_DATE\'] | date: \'d/M/yyyy\'}}\n        <span>RM{{orders[orderID][\'ORDER_AMOUNT\']}}</span>\n      </ion-note>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\orderlist\orderlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], OrderlistPage);
    return OrderlistPage;
}());

//# sourceMappingURL=orderlist.js.map

/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistPageModule", function() { return OrderlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderlist__ = __webpack_require__(1037);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderlistPageModule = /** @class */ (function () {
    function OrderlistPageModule() {
    }
    OrderlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orderlist__["a" /* OrderlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderlist__["a" /* OrderlistPage */]),
            ],
        })
    ], OrderlistPageModule);
    return OrderlistPageModule;
}());

//# sourceMappingURL=orderlist.module.js.map

/***/ })

});
//# sourceMappingURL=25.js.map