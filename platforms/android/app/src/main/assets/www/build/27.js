webpackJsonp([27],{

/***/ 1035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notifications_notifications__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(98);
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
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, navParams, notification, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notification = notification;
        this.loading = loading;
        this.notificationList = [];
    }
    NotificationsPage.prototype.ngOnInit = function () {
        this.getNotifications();
    };
    NotificationsPage.prototype.getNotifications = function () {
        var _this = this;
        this.loading.showLoading();
        Promise.all([
            this.notification.all()
        ]).then(function (v) {
            _this.notificationList = v[0];
            _this.notificationList = _this.notificationList.reverse();
            _this.loading.dismissLoading();
        });
    };
    NotificationsPage.prototype.delete = function (item, i) {
        var _this = this;
        Promise.all([
            this.notification.delete(i),
        ]).then(function () {
            _this.notificationList.splice(i, 1);
        });
    };
    NotificationsPage.prototype.clearAll = function () {
        var _this = this;
        Promise.all([
            this.notification.clear()
        ]).then(function () {
            _this.notificationList = [];
        });
    };
    NotificationsPage.prototype.redirect = function (launchURL) {
        if (launchURL) {
            window.open(launchURL, '_system');
        }
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\notifications\notifications.html"*/'<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-title>\n    Announcements\n  </ion-title>\n\n  <ion-list>\n\n   <ion-item-sliding *ngFor="let item of notificationList; let i = index" ng-options="i.orderBy:\'created_at\'">\n      <ion-item (click)="redirect(item?.launchURL)">\n        <img src="{{ item?.bigPicture }}" style="display:block;" />\n        <h2>{{ item?.title }}</h2>\n        <p>{{ item?.message }}</p>\n        <small>{{ item?.created_at }}</small>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" (click)="delete(item, i)">Delete</button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <button *ngIf="notificationList.length > 0" ion-button color="danger" (click)="clearAll()" full>Delete All</button>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_notifications_notifications__["a" /* NotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(1035);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */]),
            ],
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());

//# sourceMappingURL=notifications.module.js.map

/***/ })

});
//# sourceMappingURL=27.js.map