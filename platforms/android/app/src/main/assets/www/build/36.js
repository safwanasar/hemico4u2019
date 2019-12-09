webpackJsonp([36],{

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MerchantorderlistPage; });
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
 * Generated class for the MerchantorderlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MerchantorderlistPage = /** @class */ (function () {
    function MerchantorderlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MerchantorderlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MerchantorderlistPage');
    };
    MerchantorderlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-merchantorderlist',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\merchantorderlist\merchantorderlist.html"*/'<!--\n  Generated template for the MerchantorderlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Order List</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="appType">\n      <ion-segment-button value="neworder">\n        New <ion-badge>44 </ion-badge>\n      </ion-segment-button>\n      <ion-segment-button value="inprogress">\n        In Progress\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div [ngSwitch]="appType">\n    <ion-list *ngSwitchCase="\'neworder\'" class="neworder">\n        <ion-list-header>\n          Details\n        </ion-list-header>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6 text-left>\n                <p><span>ID:</span>  #18-00000007</p>\n                <p><span>Date:</span> 28/June/2018</p>\n              </ion-col>\n              <ion-col col-6 text-right>\n                <p><span>Total</span></p>\n                <p>RM156.60</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-2>\n                <img src="assets/imgs/item-thumb.jpg" style="display:block;"/>\n              </ion-col>\n              <ion-col col-10>\n                <h3>Hemico Ageless Beauty Soap (1)</h3>\n                <p>RM52.50 X 2</p>\n                <p>Delivery: Self Collect</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-2>\n                <img src="assets/imgs/item-thumb.jpg" style="display:block;"/>\n              </ion-col>\n              <ion-col col-10>\n                <h3>Hemico Ageless Beauty Soap (1)</h3>\n                <p>RM52.50 X 2</p>\n                <p>Delivery: Lot 83, Taman Rahmat, 06000 Jitra Kedah</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-10>\n                  <button ion-button full class="pos_btn">Postage</button>\n                </ion-col>\n                <ion-col col-2>\n                  <button ion-button full class="del_btn"><ion-icon name="trash"></ion-icon></button>\n                </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6 text-left>\n                <p><span>ID:</span>  #18-00000007</p>\n                <p><span>Date:</span> 28/June/2018</p>\n              </ion-col>\n              <ion-col col-6 text-right>\n                <p><span>Total</span></p>\n                <p>RM156.60</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-2>\n                <img src="assets/imgs/item-thumb.jpg" style="display:block;"/>\n              </ion-col>\n              <ion-col col-10>\n                <h3>Hemico Ageless Beauty Soap (1)</h3>\n                <p>RM52.50 X 2</p>\n                <p>Delivery: Self Collect</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-2>\n                <img src="assets/imgs/item-thumb.jpg" style="display:block;"/>\n              </ion-col>\n              <ion-col col-10>\n                <h3>Hemico Ageless Beauty Soap (1)</h3>\n                <p>RM52.50 X 2</p>\n                <p>Delivery: Lot 83, Taman Rahmat, 06000 Jitra Kedah</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-10>\n                  <button ion-button full class="pos_btn">Postage</button>\n                </ion-col>\n                <ion-col col-2>\n                  <button ion-button full class="del_btn"><ion-icon name="trash"></ion-icon></button>\n                </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6 text-left>\n                <p><span>ID:</span>  #18-00000007</p>\n                <p><span>Date:</span> 28/June/2018</p>\n              </ion-col>\n              <ion-col col-6 text-right>\n                <p><span>Total</span></p>\n                <p>RM156.60</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-2>\n                <img src="assets/imgs/item-thumb.jpg" style="display:block;"/>\n              </ion-col>\n              <ion-col col-10>\n                <h3>Hemico Ageless Beauty Soap (1)</h3>\n                <p>RM52.50 X 2</p>\n                <p>Delivery: Self Collect</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-2>\n                <img src="assets/imgs/item-thumb.jpg" style="display:block;"/>\n              </ion-col>\n              <ion-col col-10>\n                <h3>Hemico Ageless Beauty Soap (1)</h3>\n                <p>RM52.50 X 2</p>\n                <p>Delivery: Lot 83, Taman Rahmat, 06000 Jitra Kedah</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-10>\n                  <button ion-button full class="pos_btn">Postage</button>\n                </ion-col>\n                <ion-col col-2>\n                  <button ion-button full class="del_btn"><ion-icon name="trash"></ion-icon></button>\n                </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'inprogress\'" class="inprogress">\n        <ion-list-header>\n          Details\n        </ion-list-header>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6 text-left>\n                <p><span>Name:</span> Safwan Rahman</p>\n                <p><span>Phone:</span> 0172492669</p>\n                <p><span>Address:</span> Lot 83, Taman Rahmat, 06000 Jitra, Kedah</p>\n              </ion-col>\n              <ion-col col-6 text-right>\n                <p><span>Poslaju</span></p>\n                <p>ER355351999MY</p>\n                <p><span>ID:</span> #18-00000007</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-2>\n                <img src="assets/imgs/item-thumb.jpg" style="display:block;"/>\n              </ion-col>\n              <ion-col col-10>\n                <h3>Hemico Ageless Beauty Soap (1)</h3>\n                <p>RM52.50 X 2</p>\n                <p>Delivery: Self Collect</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-2>\n                <img src="assets/imgs/item-thumb.jpg" style="display:block;"/>\n              </ion-col>\n              <ion-col col-10>\n                <h3>Hemico Ageless Beauty Soap (1)</h3>\n                <p>RM52.50 X 2</p>\n                <p>Delivery: Lot 83, Taman Rahmat, 06000 Jitra Kedah</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6 text-left>\n                <p><span>Name:</span> Safwan Rahman</p>\n                <p><span>Phone:</span> 0172492669</p>\n                <p><span>Address:</span> Lot 83, Taman Rahmat, 06000 Jitra, Kedah</p>\n              </ion-col>\n              <ion-col col-6 text-right>\n                <p><span>Poslaju</span></p>\n                <p>ER355351999MY</p>\n                <p><span>ID:</span> #18-00000007</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-2>\n                <img src="assets/imgs/item-thumb.jpg" style="display:block;"/>\n              </ion-col>\n              <ion-col col-10>\n                <h3>Hemico Ageless Beauty Soap (1)</h3>\n                <p>RM52.50 X 2</p>\n                <p>Delivery: Self Collect</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-2>\n                <img src="assets/imgs/item-thumb.jpg" style="display:block;"/>\n              </ion-col>\n              <ion-col col-10>\n                <h3>Hemico Ageless Beauty Soap (1)</h3>\n                <p>RM52.50 X 2</p>\n                <p>Delivery: Lot 83, Taman Rahmat, 06000 Jitra Kedah</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6 text-left>\n                <p><span>Name:</span> Safwan Rahman</p>\n                <p><span>Phone:</span> 0172492669</p>\n                <p><span>Address:</span> Lot 83, Taman Rahmat, 06000 Jitra, Kedah</p>\n              </ion-col>\n              <ion-col col-6 text-right>\n                <p><span>Poslaju</span></p>\n                <p>ER355351999MY</p>\n                <p><span>ID:</span> #18-00000007</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-2>\n                <img src="assets/imgs/item-thumb.jpg" style="display:block;"/>\n              </ion-col>\n              <ion-col col-10>\n                <h3>Hemico Ageless Beauty Soap (1)</h3>\n                <p>RM52.50 X 2</p>\n                <p>Delivery: Self Collect</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-2>\n                <img src="assets/imgs/item-thumb.jpg" style="display:block;"/>\n              </ion-col>\n              <ion-col col-10>\n                <h3>Hemico Ageless Beauty Soap (1)</h3>\n                <p>RM52.50 X 2</p>\n                <p>Delivery: Lot 83, Taman Rahmat, 06000 Jitra Kedah</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n\n    </ion-list>\n\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\merchantorderlist\merchantorderlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MerchantorderlistPage);
    return MerchantorderlistPage;
}());

//# sourceMappingURL=merchantorderlist.js.map

/***/ }),

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantorderlistPageModule", function() { return MerchantorderlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__merchantorderlist__ = __webpack_require__(1027);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MerchantorderlistPageModule = /** @class */ (function () {
    function MerchantorderlistPageModule() {
    }
    MerchantorderlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__merchantorderlist__["a" /* MerchantorderlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__merchantorderlist__["a" /* MerchantorderlistPage */]),
            ],
        })
    ], MerchantorderlistPageModule);
    return MerchantorderlistPageModule;
}());

//# sourceMappingURL=merchantorderlist.module.js.map

/***/ })

});
//# sourceMappingURL=36.js.map