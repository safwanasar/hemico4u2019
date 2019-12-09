webpackJsonp([26],{

/***/ 1036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_merchant_mall_merchant_mall__ = __webpack_require__(72);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the OrderdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderdetailPage = /** @class */ (function () {
    function OrderdetailPage(http, alertCtrl, navCtrl, mallApi, navParams) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.mallApi = mallApi;
        this.navParams = navParams;
        this.requestURL = "" + URL;
        this.order = {
            ORDER_STATUS: "Loading...",
            ORDER_QTY: "000",
            ORDER_AMOUNT: "000",
            DELIVERY_CHARGES: "000",
            ORDERITEMS: [{ NAME: "000", QTY: "000", PRICE: "000" }],
            SHIPPING_ADDRESS: {
                RECIPIENT: "Loading...",
                CONTACT: "Loading...",
                ADDRESS_1: "Loading..."
            }
        };
        this.orderID = "";
        this.orderID = navParams.get("orderID");
    }
    OrderdetailPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad OrderdetailPage");
        this.loadData();
    };
    OrderdetailPage.prototype.loadData = function () {
        var _this = this;
        this.mallApi.getMyaccount().subscribe(function (account) {
            _this.mallApi.oderdetail(__assign({}, account, { orderID: _this.orderID })).subscribe(function (res) {
                var data = res.json();
                if (data["STATUS_MESSAGE"] != "FAILED") {
                    _this.order = data["ORDER"][_this.orderID];
                }
                else {
                    var error = _this.alertCtrl.create({
                        title: "Error",
                        message: data["STATUS_REMARKS"],
                        buttons: ["OK"]
                    });
                    console.log(res);
                    error.present();
                }
            }, function (err) {
                var error = _this.alertCtrl.create({
                    title: "Error",
                    message: err,
                    buttons: ["OK"]
                });
                error.present();
            });
        });
    };
    OrderdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-orderdetail",template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\orderdetail\orderdetail.html"*/'<!--\n  Generated template for the OrderdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Order Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="order">\n    <ion-list>\n      <ion-title>Your Order Details</ion-title>\n      <ion-item text-center class="main-details">\n        <h3>Order ID:</h3>\n        <h1>{{orderID}}</h1>\n        <ion-badge color="secondary">{{order.ORDER_STATUS}}</ion-badge>\n      </ion-item>\n    </ion-list>\n    <ion-title>Sender Details</ion-title>\n    <ion-list class="no-bg">\n      <ion-item>\n        <ion-icon name="person" item-start></ion-icon>\n          [WIP] Ahmad Safwan b Abd Rahman\n      </ion-item>\n      <ion-item>\n        <ion-icon name="pin" item-start></ion-icon>\n          [WIP] Lot 83, Taman Rahmat, 06000 Jitra, Kedah Darul Aman.\n      </ion-item>\n      <ion-item>\n        <ion-icon name="call" item-start></ion-icon>\n          [WIP] +6017-2492669\n      </ion-item>\n    </ion-list>\n    <ion-title>Receiver Details</ion-title>\n    <ion-list class="no-bg">\n      <ion-item>\n        <ion-icon name="person" item-start></ion-icon>\n          {{order.SHIPPING_ADDRESS.RECIPIENT}}\n      </ion-item>\n      <ion-item>\n        <ion-icon name="pin" item-start></ion-icon>\n          {{order.SHIPPING_ADDRESS.ADDRESS_1}}\n      </ion-item>\n      <ion-item>\n        <ion-icon name="call" item-start></ion-icon>\n          {{order.SHIPPING_ADDRESS.CONTACT}}\n      </ion-item>\n    </ion-list>\n    <ion-title>Item Details</ion-title>\n    <ion-list class="no-bg">\n      <ion-item *ngFor="let item of order.ORDERITEMS">\n          {{item.NAME}} X {{item.QTY}}\n          <ion-note text-right item-end>\n            <span>RM{{item.QTY * item.PRICE | number: \'1.2\'}}</span>\n          </ion-note>\n      </ion-item>\n      <ion-item>\n          Delivery Charges\n          <ion-note text-right item-end>\n            <span>RM{{order.DELIVERY_CHARGES | number: \'1.2\'}}</span>\n          </ion-note>\n      </ion-item>\n      <hr>\n      <ion-item>\n          Total\n          <ion-note text-right item-end>\n            <span class="price">RM{{order.ORDER_AMOUNT | number: \'1.2\'}}</span>\n          </ion-note>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\orderdetail\orderdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], OrderdetailPage);
    return OrderdetailPage;
}());

//# sourceMappingURL=orderdetail.js.map

/***/ }),

/***/ 980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailPageModule", function() { return OrderdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderdetail__ = __webpack_require__(1036);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderdetailPageModule = /** @class */ (function () {
    function OrderdetailPageModule() {
    }
    OrderdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orderdetail__["a" /* OrderdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderdetail__["a" /* OrderdetailPage */]),
            ],
        })
    ], OrderdetailPageModule);
    return OrderdetailPageModule;
}());

//# sourceMappingURL=orderdetail.module.js.map

/***/ })

});
//# sourceMappingURL=26.js.map