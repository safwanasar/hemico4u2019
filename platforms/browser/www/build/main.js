webpackJsonp([58],{

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addproduct/addproduct.module": [
		949,
		55
	],
	"../pages/bonusaug/bonusaug.module": [
		950,
		54
	],
	"../pages/bonusdetails/bonusdetails.module": [
		951,
		53
	],
	"../pages/bonusjuly/bonusjuly.module": [
		952,
		52
	],
	"../pages/bonusjune/bonusjune.module": [
		954,
		51
	],
	"../pages/bonuslist/bonuslist.module": [
		953,
		50
	],
	"../pages/cart/cart.module": [
		956,
		49
	],
	"../pages/checkout/checkout.module": [
		955,
		48
	],
	"../pages/completed/completed.module": [
		957,
		47
	],
	"../pages/ewallet/ewallet.module": [
		958,
		46
	],
	"../pages/feedback/feedback.module": [
		959,
		45
	],
	"../pages/feedbackdone/feedbackdone.module": [
		960,
		44
	],
	"../pages/forgetpassword/forgetpassword.module": [
		961,
		43
	],
	"../pages/forgetpasswordsuccess/forgetpasswordsuccess.module": [
		962,
		42
	],
	"../pages/groupsales/groupsales.module": [
		963,
		41
	],
	"../pages/home/home.module": [
		964,
		57
	],
	"../pages/login/login.module": [
		965,
		56
	],
	"../pages/marketingplan/marketingplan.module": [
		966,
		40
	],
	"../pages/merchantaddproduct/merchantaddproduct.module": [
		967,
		39
	],
	"../pages/merchantinventory/merchantinventory.module": [
		968,
		38
	],
	"../pages/merchantlounge/merchantlounge.module": [
		969,
		37
	],
	"../pages/merchantorderlist/merchantorderlist.module": [
		970,
		36
	],
	"../pages/merchantreport/merchantreport.module": [
		971,
		35
	],
	"../pages/merchantwallet/merchantwallet.module": [
		973,
		34
	],
	"../pages/merchantwalletbank/merchantwalletbank.module": [
		972,
		33
	],
	"../pages/merchantwalletwithdraw/merchantwalletwithdraw.module": [
		974,
		32
	],
	"../pages/merchantwithdrawhistory/merchantwithdrawhistory.module": [
		977,
		31
	],
	"../pages/myaccount/myaccount.module": [
		975,
		30
	],
	"../pages/myworkplace/myworkplace.module": [
		976,
		29
	],
	"../pages/newagentcount/newagentcount.module": [
		978,
		28
	],
	"../pages/notifications/notifications.module": [
		979,
		27
	],
	"../pages/orderdetail/orderdetail.module": [
		980,
		26
	],
	"../pages/orderlist/orderlist.module": [
		981,
		25
	],
	"../pages/product3serangkai/product3serangkai.module": [
		982,
		24
	],
	"../pages/productaddin/productaddin.module": [
		983,
		23
	],
	"../pages/productalami/productalami.module": [
		984,
		22
	],
	"../pages/productalilah/productalilah.module": [
		985,
		21
	],
	"../pages/productdesc/productdesc.module": [
		986,
		20
	],
	"../pages/productgeneral/productgeneral.module": [
		987,
		19
	],
	"../pages/producthemico/producthemico.module": [
		988,
		18
	],
	"../pages/producthemicoang/producthemicoang.module": [
		989,
		17
	],
	"../pages/producthemicocolor/producthemicocolor.module": [
		990,
		16
	],
	"../pages/producthemicoscent/producthemicoscent.module": [
		991,
		15
	],
	"../pages/productinspiral/productinspiral.module": [
		992,
		14
	],
	"../pages/productleprimera/productleprimera.module": [
		993,
		13
	],
	"../pages/productlist/productlist.module": [
		994,
		12
	],
	"../pages/productmyhome/productmyhome.module": [
		995,
		11
	],
	"../pages/productneutralene/productneutralene.module": [
		996,
		10
	],
	"../pages/productnurskin/productnurskin.module": [
		997,
		9
	],
	"../pages/productohuru/productohuru.module": [
		998,
		8
	],
	"../pages/productperformance/productperformance.module": [
		999,
		7
	],
	"../pages/productpkaboo/productpkaboo.module": [
		1000,
		6
	],
	"../pages/productpuspa/productpuspa.module": [
		1001,
		5
	],
	"../pages/productthreeleaf/productthreeleaf.module": [
		1002,
		4
	],
	"../pages/register/register.module": [
		1003,
		3
	],
	"../pages/registeragent/registeragent.module": [
		1004,
		2
	],
	"../pages/tabs/tabs.module": [
		1005,
		1
	],
	"../pages/userprofile/userprofile.module": [
		1006,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notifications_notifications__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    /* public parseuinfo = {}; */
    function HomePage(storageProvider, loading, navCtrl, navParams, mallApi, notificationsProvider, plt, localNotifications, alertCtrl) {
        this.storageProvider = storageProvider;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mallApi = mallApi;
        this.notificationsProvider = notificationsProvider;
        this.plt = plt;
        this.localNotifications = localNotifications;
        this.profile = {};
        /* this.plt.ready().then(() => {
          this.localNotifications.on('click').subscribe(notification => {
            alert(notification.data);
          });
        }); */
    }
    /* btnPushClicked() {
      this.plt.ready().then(() => {
        this.localNotifications.schedule({
          id: 1,
          title: 'My first Noti',
          text: 'We have a new application !',
          trigger: {at: new Date(new Date().getTime() + 10000)},
          foreground: true,
          data: {"id": 1, "name": "Mr.A"}
        });
      });
    } */
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.loading.showLoading();
        this.mallApi.getMyaccount().subscribe(function (res) {
            if (res) {
                _this.profile = res;
                /* alert(res);
                this.parseuinfo = "http://1mise.com/api?uid="+res["LOGINID"]+"&fcmtkn=";
                var testparse=  "http://1mise.com/api?uid="+res["LOGINID"]+"&fcmtkn=";
                alert(testparse); */
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
            _this.loading.dismissLoading();
        }, function (err) {
            _this.loading.dismissLoading();
        });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.loading.showLoading('loading...');
        return Promise.all([
            this.mallApi.logout(),
        ]).then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            _this.loading.dismissLoading();
        }).catch(function (err) {
            _this.loading.dismissLoading();
            _this.loading.presentToast('Error Unable to logout!');
        });
    };
    HomePage.prototype.open = function (page) {
        this.navCtrl.push(page);
    };
    HomePage.prototype.setRoot = function (page) {
        this.navCtrl.setRoot(page);
    };
    HomePage.prototype.notificationList = function () {
        // let NotiId = this.getRandomInt(5);
        // this.notificationsProvider.save(
        //   `Task ${NotiId}`,
        //   'Task Body Lorem ipsum dolur',
        //   NotiId,
        //   'https://www.hemico4u.com/konsep-perniagaan/',
        //   'https://www.hemico4u.com/wp-content/uploads/2018/12/Selamat-Tahun-Baru-01.jpg',
        // ).then((v) => {
        //   this.navCtrl.push('NotificationsPage');
        // });
        this.navCtrl.push('NotificationsPage');
    };
    HomePage.prototype.getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="mymart">\n    <ion-toolbar>\n      <ion-title start>\n        <button ion-button menuToggle float-left class="mycategories">\n  			  <ion-icon name="menu"></ion-icon>\n  			</button>\n        <img src="assets/imgs/hemico-white.png" style="margin:0 auto; display:block; width:20%;" />\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="notificationList()">\n          <ion-icon name="md-notifications" style="font-size: 25px"></ion-icon>\n          <!--<ion-badge color="danger" item-end>10</ion-badge>-->\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="home-content">\n  <h5>Welcome {{ profile?.USERID }}!</h5>\n  <h6>{{ profile?.AGENTID }}</h6>\n  <!-- <button ion-button small color="light" menuClose (click)="open(\'UserprofilePage\')" class="profile_btn">View Profile</button> -->\n  <ion-grid padding class="home-menu">\n\n    <ion-row>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'MyworkplacePage\')">\n          <ion-card-header>\n            <img src="assets/imgs/desk.png" style="margin:0 auto; display:block; width:50%;" />\n          </ion-card-header>\n          <ion-card-content>\n            MyWork Place\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'ProductlistPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/iconfinder_box_49364.png" style="margin:0 auto; display:block; width:50%;" />\n          </ion-card-header>\n          <ion-card-content>\n            Products\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'MarketingplanPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/iconfinder_presentation_2799203.png" style="margin:0 auto; display:block; width:50%;" />\n          </ion-card-header>\n          <ion-card-content>\n            Marketing Plan\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card (click)="open(\'FeedbackPage\')">\n          <ion-card-header>\n            <img src="assets/imgs/iconfinder_ilustracoes_04-12_1519782.png" style="margin:0 auto; display:block; width:50%;" />\n          </ion-card-header>\n          <ion-card-content>\n            Feedback\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <!-- <ion-grid padding>\n    <ion-row>\n        <ion-col col-12>\n          <button ion-button small color="light" block (click)="logout()">Log Out</button>\n        </ion-col>\n    </ion-row>\n  </ion-grid> -->\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_notifications_notifications__["a" /* NotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(512);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_merchant_mall_merchant_mall__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_api_api__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_onesignal__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_storage_storage__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_loading_loading__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_notifications_notifications__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser_ngx__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_document_viewer__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_fcm__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_fire__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_fire_database__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_local_notifications__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_device__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var firebaseConfig = {
    apiKey: "AIzaSyCERykbjTXbKsZu3JFlwsX6JIbPbOOWMKI",
    authDomain: "hemico-app-98c3a.firebaseapp.com",
    databaseURL: "https://hemico-app-98c3a.firebaseio.com",
    projectId: "hemico-app-98c3a",
    storageBucket: "hemico-app-98c3a.appspot.com",
    messagingSenderId: "847269229484",
    appId: "1:847269229484:web:e4c2d9c1ba8698f2"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addproduct/addproduct.module#AddproductPageModule', name: 'AddproductPage', segment: 'addproduct', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bonusaug/bonusaug.module#BonusaugPageModule', name: 'BonusaugPage', segment: 'bonusaug', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bonusdetails/bonusdetails.module#BonusdetailsPageModule', name: 'BonusdetailsPage', segment: 'bonusdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bonusjuly/bonusjuly.module#BonusjulyPageModule', name: 'BonusjulyPage', segment: 'bonusjuly', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bonuslist/bonuslist.module#BonuslistPageModule', name: 'BonuslistPage', segment: 'bonuslist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bonusjune/bonusjune.module#BonusjunePageModule', name: 'BonusjunePage', segment: 'bonusjune', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/completed/completed.module#CompletedPageModule', name: 'CompletedPage', segment: 'completed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ewallet/ewallet.module#EwalletPageModule', name: 'EwalletPage', segment: 'ewallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedbackdone/feedbackdone.module#FeedbackdonePageModule', name: 'FeedbackdonePage', segment: 'feedbackdone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgetpassword/forgetpassword.module#ForgetpasswordPageModule', name: 'ForgetpasswordPage', segment: 'forgetpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgetpasswordsuccess/forgetpasswordsuccess.module#ForgetpasswordsuccessPageModule', name: 'ForgetpasswordsuccessPage', segment: 'forgetpasswordsuccess', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/groupsales/groupsales.module#GroupsalesPageModule', name: 'GroupsalesPage', segment: 'groupsales', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/marketingplan/marketingplan.module#MarketingplanPageModule', name: 'MarketingplanPage', segment: 'marketingplan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/merchantaddproduct/merchantaddproduct.module#MerchantaddproductPageModule', name: 'MerchantaddproductPage', segment: 'merchantaddproduct', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/merchantinventory/merchantinventory.module#MerchantinventoryPageModule', name: 'MerchantinventoryPage', segment: 'merchantinventory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/merchantlounge/merchantlounge.module#MerchantloungePageModule', name: 'MerchantloungePage', segment: 'merchantlounge', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/merchantorderlist/merchantorderlist.module#MerchantorderlistPageModule', name: 'MerchantorderlistPage', segment: 'merchantorderlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/merchantreport/merchantreport.module#MerchantreportPageModule', name: 'MerchantreportPage', segment: 'merchantreport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/merchantwalletbank/merchantwalletbank.module#MerchantwalletbankPageModule', name: 'MerchantwalletbankPage', segment: 'merchantwalletbank', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/merchantwallet/merchantwallet.module#MerchantwalletPageModule', name: 'MerchantwalletPage', segment: 'merchantwallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/merchantwalletwithdraw/merchantwalletwithdraw.module#MerchantwalletwithdrawPageModule', name: 'MerchantwalletwithdrawPage', segment: 'merchantwalletwithdraw', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myaccount/myaccount.module#MyaccountPageModule', name: 'MyaccountPage', segment: 'myaccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myworkplace/myworkplace.module#MyworkplacePageModule', name: 'MyworkplacePage', segment: 'myworkplace', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/merchantwithdrawhistory/merchantwithdrawhistory.module#MerchantwithdrawhistoryPageModule', name: 'MerchantwithdrawhistoryPage', segment: 'merchantwithdrawhistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newagentcount/newagentcount.module#NewagentcountPageModule', name: 'NewagentcountPage', segment: 'newagentcount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderdetail/orderdetail.module#OrderdetailPageModule', name: 'OrderdetailPage', segment: 'orderdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderlist/orderlist.module#OrderlistPageModule', name: 'OrderlistPage', segment: 'orderlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product3serangkai/product3serangkai.module#Product3serangkaiPageModule', name: 'Product3serangkaiPage', segment: 'product3serangkai', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productaddin/productaddin.module#ProductaddinPageModule', name: 'ProductaddinPage', segment: 'productaddin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productalami/productalami.module#ProductalamiPageModule', name: 'ProductalamiPage', segment: 'productalami', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productalilah/productalilah.module#ProductalilahPageModule', name: 'ProductalilahPage', segment: 'productalilah', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productdesc/productdesc.module#ProductdescPageModule', name: 'ProductdescPage', segment: 'productdesc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productgeneral/productgeneral.module#ProductgeneralPageModule', name: 'ProductgeneralPage', segment: 'productgeneral', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producthemico/producthemico.module#ProducthemicoPageModule', name: 'ProducthemicoPage', segment: 'producthemico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producthemicoang/producthemicoang.module#ProducthemicoangPageModule', name: 'ProducthemicoangPage', segment: 'producthemicoang', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producthemicocolor/producthemicocolor.module#ProducthemicocolorPageModule', name: 'ProducthemicocolorPage', segment: 'producthemicocolor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producthemicoscent/producthemicoscent.module#ProducthemicoscentPageModule', name: 'ProducthemicoscentPage', segment: 'producthemicoscent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productinspiral/productinspiral.module#ProductinspiralPageModule', name: 'ProductinspiralPage', segment: 'productinspiral', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productleprimera/productleprimera.module#ProductleprimeraPageModule', name: 'ProductleprimeraPage', segment: 'productleprimera', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productlist/productlist.module#ProductlistPageModule', name: 'ProductlistPage', segment: 'productlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productmyhome/productmyhome.module#ProductmyhomePageModule', name: 'ProductmyhomePage', segment: 'productmyhome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productneutralene/productneutralene.module#ProductneutralenePageModule', name: 'ProductneutralenePage', segment: 'productneutralene', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productnurskin/productnurskin.module#ProductnurskinPageModule', name: 'ProductnurskinPage', segment: 'productnurskin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productohuru/productohuru.module#ProductohuruPageModule', name: 'ProductohuruPage', segment: 'productohuru', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productperformance/productperformance.module#ProductperformancePageModule', name: 'ProductperformancePage', segment: 'productperformance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productpkaboo/productpkaboo.module#ProductpkabooPageModule', name: 'ProductpkabooPage', segment: 'productpkaboo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productpuspa/productpuspa.module#ProductpuspaPageModule', name: 'ProductpuspaPage', segment: 'productpuspa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productthreeleaf/productthreeleaf.module#ProductthreeleafPageModule', name: 'ProductthreeleafPage', segment: 'productthreeleaf', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registeragent/registeragent.module#RegisteragentPageModule', name: 'RegisteragentPage', segment: 'registeragent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofile/userprofile.module#UserprofilePageModule', name: 'UserprofilePage', segment: 'userprofile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_20__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_loading_loading__["a" /* LoadingProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_notifications_notifications__["a" /* NotificationsProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_20__angular_fire_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_local_notifications__["a" /* LocalNotifications */],
                // Platform,  
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_device__["a" /* Device */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MerchantMallProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MerchantMallProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MerchantMallProvider = /** @class */ (function () {
    function MerchantMallProvider(http, api) {
        var _this = this;
        this.http = http;
        this.api = api;
        // public HEADER_AUTH_TOKEN = 'ABCD1234';
        this.HEADER_AUTH_TOKEN = "AGENTHEMICO$886688";
        // console.log("Hello MerchantMallProvider Provider");
        this.getToken().subscribe(function (token) {
            _this.token = token;
        });
    }
    // Auth
    MerchantMallProvider.prototype.login = function (data) {
        // return this.api.get("/API/AgentLogin.asp", data, { authorization: "ABCD1234" });
        return this.api.get("/API/AgentLogin.asp", data, { authorization: this.HEADER_AUTH_TOKEN });
    };
    MerchantMallProvider.prototype.logout = function () {
        this.clearToken();
        this.clearAccount();
    };
    MerchantMallProvider.prototype.register = function (data) {
        return this.api.post("/Registration.asp", data);
    };
    // Util
    MerchantMallProvider.prototype.orderlist = function (data) {
        return this.api.get("/API/PurchaseHistory.asp", { UserId: data.USERID, Language: "ENG" }, { authorization: data.token });
    };
    MerchantMallProvider.prototype.oderdetail = function (data) {
        return this.api.get("/API/PurchaseHistory.asp", { UserId: data.USERID, OrderId: data.orderID, Language: "ENG" }, { authorization: data.token });
    };
    MerchantMallProvider.prototype.bonuslist = function (data) {
        return this.api.get("/API/AgentMonthBonusStmt.asp", { UserId: data.USERID }, { authorization: data.token });
    };
    MerchantMallProvider.prototype.bonusdetail = function (data) {
        return this.api.get("/API/AgentBonusStmt.asp", {
            USERID: data.USERID,
            MONTH: data.MONTH,
            YEAR: data.YEAR,
            Language: "ENG"
        }, { authorization: data.token });
    };
    MerchantMallProvider.prototype.agentcount = function (data) {
        return this.api.get("/API/AgentNetworkCount.asp", { UserId: data.USERID }, { authorization: data.token });
    };
    MerchantMallProvider.prototype.groupsales = function (data) {
        return this.api.get("/API/AgentNetworkGroupSales.asp", { UserId: data.USERID }, { authorization: data.token });
    };
    MerchantMallProvider.prototype.ewallet = function (data) {
        return this.api.get("/API/AgentEWalletStmt.asp", { UserId: data.USERID }, { authorization: data.token });
    };
    MerchantMallProvider.prototype.categoryList = function () {
        return this.api.tokenGet("/API/GetCategoryList.asp", { Language: "ENG" });
    };
    // Token Storage
    MerchantMallProvider.prototype.getToken = function () {
        return this.api.getToken();
    };
    MerchantMallProvider.prototype.saveToken = function (data) {
        return this.api.saveToken(data);
    };
    MerchantMallProvider.prototype.clearToken = function () {
        return this.api.clearToken();
    };
    // page
    MerchantMallProvider.prototype.home = function () {
        return this.api.tokenGet("/api/home.asp", { Language: "ENG" });
    };
    MerchantMallProvider.prototype.getProductByCategory = function (CategoryId) {
        return this.api.tokenGet("/api/GetProductList.asp", {
            Language: "ENG",
            CategoryId: CategoryId
        });
    };
    MerchantMallProvider.prototype.getProduct = function (ProdCode) {
        return this.api.tokenGet("/api/GetProductDetails.asp", {
            Language: "ENG",
            ProdCode: ProdCode
        });
    };
    // acc
    MerchantMallProvider.prototype.saveAccount = function (data) {
        return this.api.saveAccount(data);
    };
    MerchantMallProvider.prototype.getMyaccount = function () {
        return this.api.getAccount();
    };
    MerchantMallProvider.prototype.clearAccount = function () {
        return this.api.clearAccount();
    };
    MerchantMallProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */]])
    ], MerchantMallProvider);
    return MerchantMallProvider;
}());

//# sourceMappingURL=merchant-mall.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider(storage) {
        this.storage = storage;
    }
    StorageProvider.prototype.get = function (key) {
        return this.storage.get(key);
    };
    StorageProvider.prototype.set = function (key, value) {
        return this.storage.set(key, value);
    };
    StorageProvider.prototype.remove = function (key) {
        return this.storage.remove(key);
    };
    StorageProvider.prototype.clear = function () {
        return this.storage.clear();
    };
    StorageProvider.prototype.lenght = function () {
        return this.storage.length();
    };
    StorageProvider.prototype.keys = function () {
        return this.storage.keys();
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CONSTANTS = {
    is_poduction: true,
    //  url_prod: "http://hemicomall.netmgconsulting.com",
    // url_prod: "http://hemico.netmgconsulting.com",
    url_prod: "https://agent.hemico4u.com",
    url_dev: "http://localhost:8000",
    url_noti_dev: "http://35.240.205.140:4000",
    url_noti_prod: "http://35.240.205.140:4000"
};
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.httpOption = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                "Content-Type": "application/x-www-form-urlencoded"
            })
        };
        if (CONSTANTS.is_poduction) {
            this.HOST = CONSTANTS.url_prod;
        }
        else {
            this.HOST = CONSTANTS.url_dev;
        }
    }
    ApiProvider.prototype.params = function (data) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var k in data) {
            params.set(k, data[k]);
        }
        return params.toString();
    };
    ApiProvider.prototype.post = function (url, data, header) {
        if (header === void 0) { header = {}; }
        var headers = this.patchHeader(header);
        var full_url = this.HOST + url + "?" + this.params(data);
        return this.http.post(full_url, this.params(data), { headers: headers });
    };
    ApiProvider.prototype.get = function (url, data, header) {
        if (data === void 0) { data = null; }
        if (header === void 0) { header = {}; }
        var headers = this.patchHeader(header);
        var full_url = this.HOST + url + (data ? "?" + this.params(data) : "");
        return this.http.get(full_url, { headers: headers });
    };
    ApiProvider.prototype.tokenGet = function (url, options) {
        var _this = this;
        var observeGet = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _this.getToken().subscribe(function (token) {
                if (token) {
                    _this.get(url, options, {
                        authorization: token
                    }).subscribe(function (res) {
                        observer.next(res);
                    });
                }
                else {
                    console.error("token not found");
                }
            });
        });
        return observeGet;
    };
    ApiProvider.prototype.patchHeader = function (header) {
        var headers = Object.assign(this.httpOption.headers);
        for (var k in header) {
            headers.set(k, header[k]);
        }
        return headers;
    };
    // Local Storage private methods
    ApiProvider.prototype._get = function (key) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromPromise(this.storage.get(key));
    };
    ApiProvider.prototype._set = function (key, value) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromPromise(this.storage.set(key, value));
    };
    ApiProvider.prototype._remove = function (key) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromPromise(this.storage.remove(key));
    };
    // Token Storage
    ApiProvider.prototype.getToken = function () {
        return this._get("currentToken");
    };
    ApiProvider.prototype.saveToken = function (data) {
        this.token = data;
        this.httpOption.headers.set("authorization", this.token);
        return this._set("currentToken", data);
    };
    ApiProvider.prototype.clearToken = function () {
        return this._remove("currentToken");
    };
    // Get Account
    ApiProvider.prototype.getAccount = function () {
        return this._get("accountDetails");
    };
    ApiProvider.prototype.saveAccount = function (data) {
        return this._set("accountDetails", data);
    };
    ApiProvider.prototype.clearAccount = function () {
        return this._set("accountDetails", null);
    };
    ApiProvider.prototype.saveFCMToken = function (id, fcm_key, uuid) {
        return this.http.post(CONSTANTS.url_noti_dev + ("/users/userDetails?id=" + id + "&fcm=" + fcm_key + "&uuid=" + uuid), {});
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 329,
	"./af.js": 329,
	"./ar": 330,
	"./ar-dz": 331,
	"./ar-dz.js": 331,
	"./ar-kw": 332,
	"./ar-kw.js": 332,
	"./ar-ly": 333,
	"./ar-ly.js": 333,
	"./ar-ma": 334,
	"./ar-ma.js": 334,
	"./ar-sa": 335,
	"./ar-sa.js": 335,
	"./ar-tn": 336,
	"./ar-tn.js": 336,
	"./ar.js": 330,
	"./az": 337,
	"./az.js": 337,
	"./be": 338,
	"./be.js": 338,
	"./bg": 339,
	"./bg.js": 339,
	"./bm": 340,
	"./bm.js": 340,
	"./bn": 341,
	"./bn.js": 341,
	"./bo": 342,
	"./bo.js": 342,
	"./br": 343,
	"./br.js": 343,
	"./bs": 344,
	"./bs.js": 344,
	"./ca": 345,
	"./ca.js": 345,
	"./cs": 346,
	"./cs.js": 346,
	"./cv": 347,
	"./cv.js": 347,
	"./cy": 348,
	"./cy.js": 348,
	"./da": 349,
	"./da.js": 349,
	"./de": 350,
	"./de-at": 351,
	"./de-at.js": 351,
	"./de-ch": 352,
	"./de-ch.js": 352,
	"./de.js": 350,
	"./dv": 353,
	"./dv.js": 353,
	"./el": 354,
	"./el.js": 354,
	"./en-SG": 355,
	"./en-SG.js": 355,
	"./en-au": 356,
	"./en-au.js": 356,
	"./en-ca": 357,
	"./en-ca.js": 357,
	"./en-gb": 358,
	"./en-gb.js": 358,
	"./en-ie": 359,
	"./en-ie.js": 359,
	"./en-il": 360,
	"./en-il.js": 360,
	"./en-nz": 361,
	"./en-nz.js": 361,
	"./eo": 362,
	"./eo.js": 362,
	"./es": 363,
	"./es-do": 364,
	"./es-do.js": 364,
	"./es-us": 365,
	"./es-us.js": 365,
	"./es.js": 363,
	"./et": 366,
	"./et.js": 366,
	"./eu": 367,
	"./eu.js": 367,
	"./fa": 368,
	"./fa.js": 368,
	"./fi": 369,
	"./fi.js": 369,
	"./fo": 370,
	"./fo.js": 370,
	"./fr": 371,
	"./fr-ca": 372,
	"./fr-ca.js": 372,
	"./fr-ch": 373,
	"./fr-ch.js": 373,
	"./fr.js": 371,
	"./fy": 374,
	"./fy.js": 374,
	"./ga": 375,
	"./ga.js": 375,
	"./gd": 376,
	"./gd.js": 376,
	"./gl": 377,
	"./gl.js": 377,
	"./gom-latn": 378,
	"./gom-latn.js": 378,
	"./gu": 379,
	"./gu.js": 379,
	"./he": 380,
	"./he.js": 380,
	"./hi": 381,
	"./hi.js": 381,
	"./hr": 382,
	"./hr.js": 382,
	"./hu": 383,
	"./hu.js": 383,
	"./hy-am": 384,
	"./hy-am.js": 384,
	"./id": 385,
	"./id.js": 385,
	"./is": 386,
	"./is.js": 386,
	"./it": 387,
	"./it-ch": 388,
	"./it-ch.js": 388,
	"./it.js": 387,
	"./ja": 389,
	"./ja.js": 389,
	"./jv": 390,
	"./jv.js": 390,
	"./ka": 391,
	"./ka.js": 391,
	"./kk": 392,
	"./kk.js": 392,
	"./km": 393,
	"./km.js": 393,
	"./kn": 394,
	"./kn.js": 394,
	"./ko": 395,
	"./ko.js": 395,
	"./ku": 396,
	"./ku.js": 396,
	"./ky": 397,
	"./ky.js": 397,
	"./lb": 398,
	"./lb.js": 398,
	"./lo": 399,
	"./lo.js": 399,
	"./lt": 400,
	"./lt.js": 400,
	"./lv": 401,
	"./lv.js": 401,
	"./me": 402,
	"./me.js": 402,
	"./mi": 403,
	"./mi.js": 403,
	"./mk": 404,
	"./mk.js": 404,
	"./ml": 405,
	"./ml.js": 405,
	"./mn": 406,
	"./mn.js": 406,
	"./mr": 407,
	"./mr.js": 407,
	"./ms": 408,
	"./ms-my": 409,
	"./ms-my.js": 409,
	"./ms.js": 408,
	"./mt": 410,
	"./mt.js": 410,
	"./my": 411,
	"./my.js": 411,
	"./nb": 412,
	"./nb.js": 412,
	"./ne": 413,
	"./ne.js": 413,
	"./nl": 414,
	"./nl-be": 415,
	"./nl-be.js": 415,
	"./nl.js": 414,
	"./nn": 416,
	"./nn.js": 416,
	"./pa-in": 417,
	"./pa-in.js": 417,
	"./pl": 418,
	"./pl.js": 418,
	"./pt": 419,
	"./pt-br": 420,
	"./pt-br.js": 420,
	"./pt.js": 419,
	"./ro": 421,
	"./ro.js": 421,
	"./ru": 422,
	"./ru.js": 422,
	"./sd": 423,
	"./sd.js": 423,
	"./se": 424,
	"./se.js": 424,
	"./si": 425,
	"./si.js": 425,
	"./sk": 426,
	"./sk.js": 426,
	"./sl": 427,
	"./sl.js": 427,
	"./sq": 428,
	"./sq.js": 428,
	"./sr": 429,
	"./sr-cyrl": 430,
	"./sr-cyrl.js": 430,
	"./sr.js": 429,
	"./ss": 431,
	"./ss.js": 431,
	"./sv": 432,
	"./sv.js": 432,
	"./sw": 433,
	"./sw.js": 433,
	"./ta": 434,
	"./ta.js": 434,
	"./te": 435,
	"./te.js": 435,
	"./tet": 436,
	"./tet.js": 436,
	"./tg": 437,
	"./tg.js": 437,
	"./th": 438,
	"./th.js": 438,
	"./tl-ph": 439,
	"./tl-ph.js": 439,
	"./tlh": 440,
	"./tlh.js": 440,
	"./tr": 441,
	"./tr.js": 441,
	"./tzl": 442,
	"./tzl.js": 442,
	"./tzm": 443,
	"./tzm-latn": 444,
	"./tzm-latn.js": 444,
	"./tzm.js": 443,
	"./ug-cn": 445,
	"./ug-cn.js": 445,
	"./uk": 446,
	"./uk.js": 446,
	"./ur": 447,
	"./ur.js": 447,
	"./uz": 448,
	"./uz-latn": 449,
	"./uz-latn.js": 449,
	"./uz.js": 448,
	"./vi": 450,
	"./vi.js": 450,
	"./x-pseudo": 451,
	"./x-pseudo.js": 451,
	"./yo": 452,
	"./yo.js": 452,
	"./zh-cn": 453,
	"./zh-cn.js": 453,
	"./zh-hk": 454,
	"./zh-hk.js": 454,
	"./zh-tw": 455,
	"./zh-tw.js": 455
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 832;

/***/ }),

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_merchant_mall_merchant_mall__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_notifications_notifications__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_onesignal__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_is_cordova_available__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_api_api__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_device__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_fcm__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














// import { UniqueDeviceID } from '@ionic-native/unique-device-id'


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, oneSignal, mallApi, loading, storage, notification, fcm, api, 
        // public uuid: UniqueDeviceID
        device) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.oneSignal = oneSignal;
        this.mallApi = mallApi;
        this.loading = loading;
        this.storage = storage;
        this.notification = notification;
        this.fcm = fcm;
        this.api = api;
        this.device = device;
        this.profile = {};
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.loading.showLoading();
        this.mallApi.getMyaccount().subscribe(function (res) {
            if (res) {
                _this.profile = res;
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            }
            _this.loading.dismissLoading();
        }, function (err) {
            _this.loading.dismissLoading();
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (Object(__WEBPACK_IMPORTED_MODULE_11__common_is_cordova_available__["a" /* isCordovaAvailable */])()) {
                _this.oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_12__config__["a" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_12__config__["b" /* sender_id */]);
                _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);
                _this.oneSignal.handleNotificationReceived().subscribe(function (data) { return _this.onPushReceived(data.payload); });
                _this.oneSignal.handleNotificationOpened().subscribe(function (data) { return _this.onPushOpened(data.notification.payload); });
                _this.oneSignal.endInit();
                // this.oneSignal.getIds().then(identity => {
                // alert(identity.pushToken + ' its PUSHTOKEN');
                // alert(identity.userId + 'its USERID');
                // });
            }
            // this.uuid.get().then(data => {
            //   this.uniqueID = data
            // }).catch(error => {
            //   throw error
            // })
            _this.fcm.onTokenRefresh().subscribe(function (token) {
                var user_id;
                _this.mallApi.getMyaccount().subscribe(function (data) {
                    user_id = data['LOGINID'];
                });
                _this.api.saveFCMToken(user_id, token, _this.device.uuid).subscribe(function (responces) {
                });
            });
        });
    };
    MyApp.prototype.onPushReceived = function (payload) {
        var _this = this;
        this.notification.save(payload.title, payload.body, payload.notificationID, payload.launchURL, payload.bigPicture).then(function () { return _this.notification.showAlert(payload.title, payload.body); });
    };
    MyApp.prototype.onPushOpened = function (payload) {
        var _this = this;
        this.notification.save(payload.title, payload.body, payload.notificationID, payload.launchURL, payload.bigPicture).then(function () { return _this.notification.showAlert(payload.title, payload.body); });
    };
    MyApp.prototype.setRoot = function (page, data) {
        if (data === void 0) { data = {}; }
        this.nav.setRoot(page, data);
    };
    MyApp.prototype.open = function (page) {
        this.nav.push(page);
    };
    MyApp.prototype.chooseCategory = function (category) {
        this.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], { category: category });
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.loading.showLoading('loading...');
        return Promise.all([
            this.mallApi.logout(),
        ]).then(function (res) {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            _this.loading.dismissLoading();
        }).catch(function (err) {
            _this.loading.dismissLoading();
            _this.loading.presentToast('Error Unable to logout!');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <img src="{{ profile?.PROFILEPIC }}" style="width: 80px; height: 80px;float:left;" />\n       <ion-title><span>Name:</span>{{ profile?.NAME }}</ion-title>\n        <div class="top_btn">\n          <button ion-button small color="danger" menuClose (click)="open(\'UserprofilePage\')">View Profile</button>\n        </div>\n      <hr>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-item  menuClose (click)="open(\'MyworkplacePage\')"><ion-icon name="briefcase"></ion-icon> &nbsp; My WorkPlace</ion-item>\n      <ion-item  menuClose (click)="open(\'ProductlistPage\')"><ion-icon name="cube"></ion-icon> &nbsp; Products</ion-item>\n      <ion-item  menuClose (click)="open(\'MarketingplanPage\')"><ion-icon name="easel"></ion-icon> &nbsp; Marketing Plan</ion-item>\n      <ion-item  menuClose (click)="open(\'FeedbackPage\')"><ion-icon name="send"></ion-icon> &nbsp; Feedback</ion-item>\n    </ion-list>\n    <div class="button-bottom">\n      <button menuClose ion-item (click)="logout()">\n        Logout\n      </button>\n    </div><!-- /button-bottom -->\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_6__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_notifications_notifications__["a" /* NotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_13__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_device__["a" /* Device */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isCordovaAvailable; });
var isCordovaAvailable = function () {
    if (!window.cordova) {
        console.log('This is a native feature. Please use a device');
        return false;
    }
    return true;
};
//# sourceMappingURL=is-cordova-available.js.map

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sender_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return oneSignalAppId; });
var sender_id = '847269229484';
var oneSignalAppId = '0c9d0df2-c54f-4cf1-99b8-4f21b9dc2bd7';
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
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


/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(loadingCtrl, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    LoadingProvider.prototype.showLoading = function (msg) {
        if (msg === void 0) { msg = 'Please Wait...'; }
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({ content: msg });
            this.loading.present();
        }
    };
    LoadingProvider.prototype.dismissLoading = function () {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    LoadingProvider.prototype.presentToast = function (msg) {
        if (msg === void 0) { msg = 'Loading...'; }
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_fcm__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(144);
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






var LoginPage = /** @class */ (function () {
    function LoginPage(nav, mallApi, alertCtrl, loadingCtrl, fcm, api, device) {
        this.nav = nav;
        this.mallApi = mallApi;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fcm = fcm;
        this.api = api;
        this.device = device;
        this.loginCredentials = { USERID: "", PASSWORD: "" };
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        // this.goToHome();
        this.mallApi.getMyaccount().subscribe(function (res) {
            if (null != res)
                _this.goToMyacc();
        });
    };
    LoginPage.prototype.createAccount = function () {
        this.nav.push("RegisterPage");
    };
    LoginPage.prototype.goToHome = function () {
        var _this = this;
        this.mallApi.home().subscribe(function (response) {
            var home = response.json();
            if (home["STATUS_MESSAGE"] != "FAILED") {
                _this.nav.setRoot("HomePage", { home: home });
            }
        });
    };
    LoginPage.prototype.goToMyacc = function () {
        this.nav.setRoot("HomePage");
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.mallApi.login(this.loginCredentials).subscribe(function (success) {
            var response = success.json();
            if (response["STATUS_MESSAGE"] != "FAILED") {
                /*alert(response["LOGINID"] ); */
                _this.showPopup("Success", "Logged in.");
                // let token = response.token || "ABCD1234";
                var token = response.token || "AGENTHEMICO$886688";
                // this.uuid.get().then(data => {
                //   this.uniqueID = data
                // }).catch(error => {
                //   throw error
                // })
                // window['plugins'].uniqueDeviceID.get((data)=> {
                //   this.uniqueID = data
                // }, (error)=> {
                //   console.log(error)
                // });
                _this.fcm.getToken().then(function (data) {
                    _this.api.saveFCMToken(response["LOGINID"], data, _this.device.uuid).subscribe(function (data) {
                        console.log(data);
                    });
                });
                // this.goToHome()
                _this.mallApi.saveToken(token);
                _this.mallApi.saveAccount(__assign({}, response, { token: token })).subscribe(function (res) {
                    _this.goToMyacc();
                });
            }
            else {
                _this.showError(response["STATUS_REMARKS"]);
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        this.showPopup("Error", text);
    };
    LoginPage.prototype.showPopup = function (title, text) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ["OK"]
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header transparent>\n  <img src="assets/imgs/mymerchant.png" style="margin:50px auto; display:block;"/>\n  <ion-navbar>\n    <ion-row class="login-heading">Login</ion-row>\n    <ion-row class="login-link">\n      Do not have an account? <a href="JavaScript:void(0);" (click)="createAccount()"> Sign up here</a>.\n    </ion-row>\n  </ion-navbar>\n</ion-header> -->\n\n\n<ion-content padding>\n  <img src="assets/imgs/hemico-white.png" style="margin:50px auto; display:block;" />\n  <form (ngSubmit)="login()" #registerForm="ngForm">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n          <ion-item class="label_app">\n            Username:\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="Enter username" name="USERID" [(ngModel)]="loginCredentials.USERID"\n              required></ion-input>\n          </ion-item>\n          <ion-item class="label_app">\n            Password:\n          </ion-item>\n          <ion-item>\n            <ion-input type="password" placeholder="Enter password" name="PASSWORD" [(ngModel)]="loginCredentials.PASSWORD"\n              required></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row class="login-button-container">\n      <ion-col>\n        <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_collect_js__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_collect_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_collect_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotificationsProvider = /** @class */ (function () {
    function NotificationsProvider(storage, alertCtrl) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.notifications = null;
    }
    NotificationsProvider.prototype.all = function () {
        var _this = this;
        return this.storage.get('hemico_notifications').then(function (val) {
            if (val == null) {
                _this.notifications = [];
            }
            else {
                _this.notifications = val;
            }
            return _this.notifications;
        });
    };
    NotificationsProvider.prototype.save = function (title, message, notificationID, launchURL, bigPicture) {
        var _this = this;
        if (notificationID === void 0) { notificationID = null; }
        if (launchURL === void 0) { launchURL = null; }
        if (bigPicture === void 0) { bigPicture = null; }
        Promise.all([
            this.all()
        ]).then(function () {
            var items = __WEBPACK_IMPORTED_MODULE_4_collect_js___default()(_this.notifications);
            var duplicate = items.where('notificationID', notificationID).first();
            if (duplicate) {
                items.reject(function (value) {
                    return value.notificationID == notificationID;
                }).push({
                    title: title,
                    message: message,
                    notificationID: notificationID,
                    launchURL: launchURL,
                    bigPicture: bigPicture,
                    created_at: __WEBPACK_IMPORTED_MODULE_3_moment__().format('HH:mm DD/MM/YYYY'),
                });
            }
            else {
                items.push({
                    title: title,
                    message: message,
                    notificationID: notificationID,
                    launchURL: launchURL,
                    bigPicture: bigPicture,
                    created_at: __WEBPACK_IMPORTED_MODULE_3_moment__().format('HH:mm DD/MM/YYYY'),
                });
            }
            _this.storage.set('hemico_notifications', items.toArray());
        });
        return this.storage.get('hemico_notifications');
    };
    NotificationsProvider.prototype.delete = function (index) {
        var _this = this;
        Promise.all([
            this.all()
        ]).then(function () {
            _this.notifications.splice(index, 1);
            _this.storage.set('hemico_notifications', _this.notifications);
        });
    };
    NotificationsProvider.prototype.clear = function () {
        var _this = this;
        return Promise.all([
            this.storage.set('hemico_notifications', [])
        ]).then(function () { return _this.notifications = []; });
    };
    NotificationsProvider.prototype.showAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    NotificationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], NotificationsProvider);
    return NotificationsProvider;
}());

//# sourceMappingURL=notifications.js.map

/***/ })

},[507]);
//# sourceMappingURL=main.js.map