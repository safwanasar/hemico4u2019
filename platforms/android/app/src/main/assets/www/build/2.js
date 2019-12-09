webpackJsonp([2],{

/***/ 1004:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteragentPageModule", function() { return RegisteragentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registeragent__ = __webpack_require__(1060);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisteragentPageModule = /** @class */ (function () {
    function RegisteragentPageModule() {
    }
    RegisteragentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registeragent__["a" /* RegisteragentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registeragent__["a" /* RegisteragentPage */]),
            ],
        })
    ], RegisteragentPageModule);
    return RegisteragentPageModule;
}());

//# sourceMappingURL=registeragent.module.js.map

/***/ }),

/***/ 1060:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisteragentPage; });
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
 * Generated class for the RegisteragentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisteragentPage = /** @class */ (function () {
    function RegisteragentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisteragentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisteragentPage');
    };
    RegisteragentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registeragent',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\registeragent\registeragent.html"*/'<!--\n  Generated template for the RegisteragentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Easy Recruit (Registration)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides pager>\n    <ion-slide>\n        <div class="">\n          <img src="assets/imgs/sponsor-info.png" style="margin:0 auto; display:block; width:50%;" />\n          <h3>Account Information</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus purus in eros maximus consectetur.</p>\n          <ion-list>\n            <ion-item>\n              <ion-input type="text" placeholder="Sponsor Username"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Sponsor Name"></ion-input>\n            </ion-item>\n          </ion-list>\n          <ion-list>\n            <ion-item>\n              <ion-input type="text" placeholder="Placement Username"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Placement Name" disable></ion-input>\n            </ion-item>\n          </ion-list>\n          <button ion-button full>Next Step</button>\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class="">\n          <img src="assets/imgs/distributor-info.png" style="margin:0 auto; display:block; width:50%;" />\n          <h3>New Distributor Information</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus purus in eros maximus consectetur.</p>\n          <ion-list>\n            <ion-item>\n              <ion-label>Package Type</ion-label>\n              <ion-select>\n                <ion-option value="ifrodnormal">Pakej Ifrod - Normal Package</ion-option>\n                <ion-option value="usrahnormal">Pakej Usrah - Normal Package</ion-option>\n                <ion-option value="ifrodpremium">Pakej Ifrod - Premuim Package</ion-option>\n                <ion-option value="usrahpremium">Pakej Usrah - Premium Package</ion-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Username"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="IC/Passport No"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>IC Type</ion-label>\n              <ion-select>\n                <ion-option value="newic">New IC</ion-option>\n                <ion-option value="oldic">Old IC</ion-option>\n                <ion-option value="passportno">Passport No.</ion-option>\n                <ion-option value="policeic">Police IC</ion-option>\n                <ion-option value="armyic">Army IC</ion-option>\n                <ion-option value="coregno">CO Reg No.</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n\n          <ion-list>\n            <ion-item>\n                <ion-input type="text" placeholder="Name"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Gender</ion-label>\n              <ion-select>\n                <ion-option value="male">Male</ion-option>\n                <ion-option value="female">Female</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n\n          <button ion-button full>Next Step</button>\n        </div>\n    </ion-slide>\n\n    <ion-slide>\n        <div class="">\n          <img src="assets/imgs/contact-info.png" style="margin:0 auto; display:block; width:50%;" />\n          <h3>Contact Information</h3>\n          <p>Short explanation will be placed here</p>\n          <ion-list>\n            <ion-item>\n              <ion-textarea rows="4" cols="20" placeholder="Address..."></ion-textarea>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Postcode"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="City"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>State</ion-label>\n              <ion-select>\n                <ion-option value="ifrodnormal">Johor</ion-option>\n                <ion-option value="usrahnormal">Kedah</ion-option>\n                <ion-option value="ifrodpremium">Kelantan</ion-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label>Malaysia</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-input type="email" placeholder="Email"></ion-input>\n            </ion-item>\n          </ion-list>\n          <button ion-button full>Next Step</button>\n        </div>\n    </ion-slide>\n\n    <ion-slide>\n        <div class="">\n          <img src="assets/imgs/bank-information.png" style="margin:0 auto; display:block; width:70%;" />\n          <h3>Bank Information</h3>\n          <p>Short explanation will be placed here</p>\n          <ion-list>\n            <ion-item>\n              <ion-label>Select Bank</ion-label>\n              <ion-select>\n                <ion-option value="ifrodnormal">Affin Bank Berhad</ion-option>\n                <ion-option value="usrahnormal">Agro Bank</ion-option>\n                <ion-option value="ifrodpremium">Alliance Bank Berhad</ion-option>\n                <ion-option value="ifrodpremium">Amanah Saham Berhad</ion-option>\n                <ion-option value="ifrodpremium">Ambank Berhad</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n          <ion-list>\n            <ion-item>\n              <ion-input type="text" placeholder="Bank Branch"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Account No."></ion-input>\n            </ion-item>\n          </ion-list>\n          <button ion-button full>Next Step</button>\n        </div>\n    </ion-slide>\n\n    <ion-slide>\n        <div class="">\n          <img src="assets/imgs/hemico-package.png" style="margin:0 auto; display:block; width:70%;" />\n          <h3>Hemico Care Packages</h3>\n          <p>Short explanation will be placed here</p>\n          <ion-list>\n            <ion-item>\n              <ion-label>Select Package</ion-label>\n              <ion-select>\n                <ion-option value="ifrodnormal">Pakej Ifrod - Normal Package</ion-option>\n                <ion-option value="usrahnormal">Pakej Ifrod - Normal Package</ion-option>\n                <ion-option value="ifrodpremium">Pakej Ifrod - Normal Package</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n\n          <ion-list class="summary_package">\n            <ion-grid>\n              <ion-row>\n               <ion-col col-6>Total Agent Price</ion-col>\n               <ion-col col-6> <span txt-right>RM8,888</span></ion-col>\n              </ion-row>\n              <ion-row>\n               <ion-col col-6>Total Commission Price</ion-col>\n               <ion-col col-6> <span right>RM8,888</span></ion-col>\n              </ion-row>\n              <ion-row>\n               <ion-col col-6>Minimum Commission Price Required</ion-col>\n               <ion-col col-6> <span right>RM8,888</span></ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-list>\n          <button ion-button full>Next Step</button>\n        </div>\n    </ion-slide>\n\n    <ion-slide>\n        <div class="">\n          <img src="assets/imgs/delivery-method.png" style="margin:0 auto; display:block; width:70%;" />\n          <h3>Product Delivery Option</h3>\n          <p>Short explanation will be placed here</p>\n          <ion-list>\n            <ion-item>\n              <ion-label>Select Method</ion-label>\n              <ion-select>\n                <ion-option value="ifrodnormal">Collect from Stokist</ion-option>\n                <ion-option value="usrahnormal">Pakej Ifrod - Normal Package</ion-option>\n                <ion-option value="ifrodpremium">Pakej Ifrod - Normal Package</ion-option>\n              </ion-select>\n            </ion-item>\n            <h6 padding>StokisAddress:<br />No. 104 Taman Pandan, 06000 Jitra Kedah, Malaysia</h6>\n          </ion-list>\n\n          <button ion-button full>Next Step</button>\n        </div>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\registeragent\registeragent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RegisteragentPage);
    return RegisteragentPage;
}());

//# sourceMappingURL=registeragent.js.map

/***/ })

});
//# sourceMappingURL=2.js.map