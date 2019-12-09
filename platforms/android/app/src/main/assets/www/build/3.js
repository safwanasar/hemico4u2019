webpackJsonp([3],{

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(1059);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 1059:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COUNTRIES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__ = __webpack_require__(72);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var COUNTRIES = [{ "region": "ALBANIA", "code": "AL", "postcode": "" }, { "region": "ALGERIA", "code": "DZ", "postcode": "" }, { "region": "ANDORRA", "code": "AD", "postcode": "" }, { "region": "ANGOLA", "code": "AO", "postcode": "" }, { "region": "ANGUILLA", "code": "AI", "postcode": "" }, { "region": "ANTIGUA & BARBUDA", "code": "AG", "postcode": "" }, { "region": "ARGENTINA", "code": "AR", "postcode": "Required" }, { "region": "ARMENIA", "code": "AM", "postcode": "" }, { "region": "ARUBA", "code": "AW", "postcode": "" }, { "region": "AUSTRALIA", "code": "AU", "postcode": "Required" }, { "region": "AUSTRIA", "code": "AT", "postcode": "Required" }, { "region": "AZERBAIJAN", "code": "AZ", "postcode": "" }, { "region": "BAHAMAS", "code": "BS", "postcode": "" }, { "region": "BAHRAIN", "code": "BH", "postcode": "" }, { "region": "BARBADOS", "code": "BB", "postcode": "" }, { "region": "BELARUS", "code": "BY", "postcode": "" }, { "region": "BELGIUM", "code": "BE", "postcode": "" }, { "region": "BELIZE", "code": "BZ", "postcode": "" }, { "region": "BENIN", "code": "BJ", "postcode": "" }, { "region": "BERMUDA", "code": "BM", "postcode": "" }, { "region": "BHUTAN", "code": "BT", "postcode": "Required" }, { "region": "BOLIVIA", "code": "BO", "postcode": "" }, { "region": "BOSNIA & HERZEGOVINA", "code": "BA", "postcode": "" }, { "region": "BOTSWANA", "code": "BW", "postcode": "" }, { "region": "BRAZIL", "code": "BR", "postcode": "Required" }, { "region": "BRITISH VIRGIN ISLANDS", "code": "VG", "postcode": "" }, { "region": "BRUNEI", "code": "BN", "postcode": "" }, { "region": "BULGARIA", "code": "BG", "postcode": "" }, { "region": "BURKINA FASO", "code": "BF", "postcode": "" }, { "region": "BURUNDI", "code": "BI", "postcode": "" }, { "region": "CAMBODIA", "code": "KH", "postcode": "" }, { "region": "CAMEROON", "code": "CM", "postcode": "" }, { "region": "CANADA", "code": "CA", "postcode": "Required" }, { "region": "CAPE VERDE", "code": "CV", "postcode": "" }, { "region": "CAYMAN ISLANDS", "code": "KY", "postcode": "" }, { "region": "CHAD", "code": "TD", "postcode": "" }, { "region": "CHILE", "code": "CL", "postcode": "" }, { "region": "CHINA", "code": "C2", "postcode": "Required" }, { "region": "COLOMBIA", "code": "CO", "postcode": "" }, { "region": "COMOROS", "code": "KM", "postcode": "Required" }, { "region": "CONGO - BRAZZAVILLE", "code": "CG", "postcode": "" }, { "region": "CONGO - KINSHASA", "code": "CD", "postcode": "" }, { "region": "COOK ISLANDS", "code": "CK", "postcode": "" }, { "region": "COSTA RICA", "code": "CR", "postcode": "" }, { "region": "CÔTE D’IVOIRE", "code": "CI", "postcode": "" }, { "region": "CROATIA", "code": "HR", "postcode": "" }, { "region": "CYPRUS", "code": "CY", "postcode": "" }, { "region": "CZECH REPUBLIC", "code": "CZ", "postcode": "" }, { "region": "DENMARK", "code": "DK", "postcode": "Required" }, { "region": "DJIBOUTI", "code": "DJ", "postcode": "" }, { "region": "DOMINICA", "code": "DM", "postcode": "" }, { "region": "DOMINICAN REPUBLIC", "code": "DO", "postcode": "" }, { "region": "ECUADOR", "code": "EC", "postcode": "" }, { "region": "EGYPT", "code": "EG", "postcode": "" }, { "region": "EL SALVADOR", "code": "SV", "postcode": "" }, { "region": "ERITREA", "code": "ER", "postcode": "" }, { "region": "ESTONIA", "code": "EE", "postcode": "" }, { "region": "ETHIOPIA", "code": "ET", "postcode": "" }, { "region": "FALKLAND ISLANDS", "code": "FK", "postcode": "Required" }, { "region": "FAROE ISLANDS", "code": "FO", "postcode": "Required" }, { "region": "FIJI", "code": "FJ", "postcode": "" }, { "region": "FINLAND", "code": "FI", "postcode": "" }, { "region": "FRANCE", "code": "FR", "postcode": "Required" }, { "region": "FRENCH GUIANA", "code": "GF", "postcode": "" }, { "region": "FRENCH POLYNESIA", "code": "PF", "postcode": "" }, { "region": "GABON", "code": "GA", "postcode": "" }, { "region": "GAMBIA", "code": "GM", "postcode": "Required" }, { "region": "GEORGIA", "code": "GE", "postcode": "" }, { "region": "GERMANY", "code": "DE", "postcode": "Required" }, { "region": "GIBRALTAR", "code": "GI", "postcode": "" }, { "region": "GREECE", "code": "GR", "postcode": "" }, { "region": "GREENLAND", "code": "GL", "postcode": "Required" }, { "region": "GRENADA", "code": "GD", "postcode": "" }, { "region": "GUADELOUPE", "code": "GP", "postcode": "" }, { "region": "GUATEMALA", "code": "GT", "postcode": "" }, { "region": "GUINEA", "code": "GN", "postcode": "" }, { "region": "GUINEA-BISSAU", "code": "GW", "postcode": "" }, { "region": "GUYANA", "code": "GY", "postcode": "" }, { "region": "HONDURAS", "code": "HN", "postcode": "" }, { "region": "HONG KONG SAR CHINA", "code": "HK", "postcode": "" }, { "region": "HUNGARY", "code": "HU", "postcode": "" }, { "region": "ICELAND", "code": "IS", "postcode": "" }, { "region": "INDIA", "code": "IN", "postcode": "" }, { "region": "INDONESIA", "code": "ID", "postcode": "" }, { "region": "IRELAND", "code": "IE", "postcode": "" }, { "region": "ISRAEL", "code": "IL", "postcode": "" }, { "region": "ITALY", "code": "IT", "postcode": "Required" }, { "region": "JAMAICA", "code": "JM", "postcode": "" }, { "region": "JAPAN", "code": "JP", "postcode": "Required" }, { "region": "JORDAN", "code": "JO", "postcode": "" }, { "region": "KAZAKHSTAN", "code": "KZ", "postcode": "" }, { "region": "KENYA", "code": "KE", "postcode": "" }, { "region": "KIRIBATI", "code": "KI", "postcode": "Required" }, { "region": "KUWAIT", "code": "KW", "postcode": "" }, { "region": "KYRGYZSTAN", "code": "KG", "postcode": "Required" }, { "region": "LAOS", "code": "LA", "postcode": "" }, { "region": "LATVIA", "code": "LV", "postcode": "" }, { "region": "LESOTHO", "code": "LS", "postcode": "" }, { "region": "LIECHTENSTEIN", "code": "LI", "postcode": "" }, { "region": "LITHUANIA", "code": "LT", "postcode": "" }, { "region": "LUXEMBOURG", "code": "LU", "postcode": "" }, { "region": "MACEDONIA", "code": "MK", "postcode": "" }, { "region": "MADAGASCAR", "code": "MG", "postcode": "" }, { "region": "MALAWI", "code": "MW", "postcode": "Required" }, { "region": "MALAYSIA", "code": "MY", "postcode": "" }, { "region": "MALDIVES", "code": "MV", "postcode": "" }, { "region": "MALI", "code": "ML", "postcode": "" }, { "region": "MALTA", "code": "MT", "postcode": "" }, { "region": "MARSHALL ISLANDS", "code": "MH", "postcode": "" }, { "region": "MARTINIQUE", "code": "MQ", "postcode": "" }, { "region": "MAURITANIA", "code": "MR", "postcode": "Required" }, { "region": "MAURITIUS", "code": "MU", "postcode": "" }, { "region": "MAYOTTE", "code": "YT", "postcode": "Required" }, { "region": "MEXICO", "code": "MX", "postcode": "Required" }, { "region": "MICRONESIA", "code": "FM", "postcode": "" }, { "region": "MOLDOVA", "code": "MD", "postcode": "" }, { "region": "MONACO", "code": "MC", "postcode": "" }, { "region": "MONGOLIA", "code": "MN", "postcode": "" }, { "region": "MONTENEGRO", "code": "ME", "postcode": "" }, { "region": "MONTSERRAT", "code": "MS", "postcode": "" }, { "region": "MOROCCO", "code": "MA", "postcode": "" }, { "region": "MOZAMBIQUE", "code": "MZ", "postcode": "" }, { "region": "NAMIBIA", "code": "NA", "postcode": "" }, { "region": "NAURU", "code": "NR", "postcode": "Required" }, { "region": "NEPAL", "code": "NP", "postcode": "" }, { "region": "NETHERLANDS", "code": "NL", "postcode": "Required" }, { "region": "NEW CALEDONIA", "code": "NC", "postcode": "" }, { "region": "NEW ZEALAND", "code": "NZ", "postcode": "" }, { "region": "NICARAGUA", "code": "NI", "postcode": "" }, { "region": "NIGER", "code": "NE", "postcode": "Required" }, { "region": "NIGERIA", "code": "NG", "postcode": "" }, { "region": "NIUE", "code": "NU", "postcode": "Required" }, { "region": "NORFOLK ISLAND", "code": "NF", "postcode": "Required" }, { "region": "NORWAY", "code": "NO", "postcode": "Required" }, { "region": "OMAN", "code": "OM", "postcode": "" }, { "region": "PALAU", "code": "PW", "postcode": "" }, { "region": "PANAMA", "code": "PA", "postcode": "" }, { "region": "PAPUA NEW GUINEA", "code": "PG", "postcode": "" }, { "region": "PARAGUAY", "code": "PY", "postcode": "" }, { "region": "PERU", "code": "PE", "postcode": "" }, { "region": "PHILIPPINES", "code": "PH", "postcode": "" }, { "region": "PITCAIRN ISLANDS", "code": "PN", "postcode": "Required" }, { "region": "POLAND", "code": "PL", "postcode": "Required" }, { "region": "PORTUGAL", "code": "PT", "postcode": "" }, { "region": "QATAR", "code": "QA", "postcode": "" }, { "region": "RÉUNION", "code": "RE", "postcode": "" }, { "region": "ROMANIA", "code": "RO", "postcode": "" }, { "region": "RUSSIA", "code": "RU", "postcode": "Required" }, { "region": "RWANDA", "code": "RW", "postcode": "" }, { "region": "SAMOA", "code": "WS", "postcode": "" }, { "region": "SAN MARINO", "code": "SM", "postcode": "" }, { "region": "SÃO TOMÉ & PRÍNCIPE", "code": "ST", "postcode": "" }, { "region": "SAUDI ARABIA", "code": "SA", "postcode": "" }, { "region": "SENEGAL", "code": "SN", "postcode": "" }, { "region": "SERBIA", "code": "RS", "postcode": "" }, { "region": "SEYCHELLES", "code": "SC", "postcode": "" }, { "region": "SIERRA LEONE", "code": "SL", "postcode": "" }, { "region": "SINGAPORE", "code": "SG", "postcode": "Required" }, { "region": "SLOVAKIA", "code": "SK", "postcode": "" }, { "region": "SLOVENIA", "code": "SI", "postcode": "" }, { "region": "SOLOMON ISLANDS", "code": "SB", "postcode": "" }, { "region": "SOMALIA", "code": "SO", "postcode": "" }, { "region": "SOUTH AFRICA", "code": "ZA", "postcode": "" }, { "region": "SOUTH KOREA", "code": "KR", "postcode": "" }, { "region": "SPAIN", "code": "ES", "postcode": "Required" }, { "region": "SRI LANKA", "code": "LK", "postcode": "" }, { "region": "ST. HELENA", "code": "SH", "postcode": "Required" }, { "region": "ST. KITTS & NEVIS", "code": "KN", "postcode": "" }, { "region": "ST. LUCIA", "code": "LC", "postcode": "" }, { "region": "ST. PIERRE & MIQUELON", "code": "PM", "postcode": "Required" }, { "region": "ST. VINCENT & GRENADINES", "code": "VC", "postcode": "" }, { "region": "SURINAME", "code": "SR", "postcode": "Required" }, { "region": "SVALBARD & JAN MAYEN", "code": "SJ", "postcode": "Required" }, { "region": "SWAZILAND", "code": "SZ", "postcode": "" }, { "region": "SWEDEN", "code": "SE", "postcode": "Required" }, { "region": "SWITZERLAND", "code": "CH", "postcode": "Required" }, { "region": "TAIWAN", "code": "TW", "postcode": "" }, { "region": "TAJIKISTAN", "code": "TJ", "postcode": "" }, { "region": "TANZANIA", "code": "TZ", "postcode": "" }, { "region": "THAILAND", "code": "TH", "postcode": "" }, { "region": "TOGO", "code": "TG", "postcode": "" }, { "region": "TONGA", "code": "TO", "postcode": "" }, { "region": "TRINIDAD & TOBAGO", "code": "TT", "postcode": "" }, { "region": "TUNISIA", "code": "TN", "postcode": "" }, { "region": "TURKMENISTAN", "code": "TM", "postcode": "" }, { "region": "TURKS & CAICOS ISLANDS", "code": "TC", "postcode": "" }, { "region": "TUVALU", "code": "TV", "postcode": "Required" }, { "region": "UGANDA", "code": "UG", "postcode": "" }, { "region": "UKRAINE", "code": "UA", "postcode": "" }, { "region": "UNITED ARAB EMIRATES", "code": "AE", "postcode": "" }, { "region": "UNITED KINGDOM", "code": "GB", "postcode": "Required" }, { "region": "UNITED STATES", "code": "US", "postcode": "Required" }, { "region": "URUGUAY", "code": "UY", "postcode": "" }, { "region": "VANUATU", "code": "VU", "postcode": "" }, { "region": "VATICAN CITY", "code": "VA", "postcode": "Required" }, { "region": "VENEZUELA", "code": "VE", "postcode": "" }, { "region": "VIETNAM", "code": "VN", "postcode": "" }, { "region": "WALLIS & FUTUNA", "code": "WF", "postcode": "Required" }, { "region": "YEMEN", "code": "YE", "postcode": "" }, { "region": "ZAMBIA", "code": "ZM", "postcode": "" }, { "region": "ZIMBABWE", "code": "ZW", "postcode": "" }];
var RegisterPage = /** @class */ (function () {
    function RegisterPage(nav, mallApi, alertCtrl) {
        this.nav = nav;
        this.mallApi = mallApi;
        this.alertCtrl = alertCtrl;
        this.countries = COUNTRIES;
        this.createSuccess = false;
        this.registerCredentials = {
            "TRANS_ID": "",
            "SPONSOR_USERID": "",
            "NEW_USERID": "",
            "NAME": "",
            "IC_NO": "",
            "IC_TYPE": "",
            "ADDRESS1": "",
            "ADDRESS2": "",
            "POSTCODE": "",
            "CITY": "",
            "COUNTRY_CODE": "",
            "COUNTRY_NAME": "",
            "STATE": "",
            "TEL_MOBILE": "",
            "EMAILID": "",
            "PASSWORD": "",
            "confirmation_password": "",
        };
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.registerCredentials.PASSWORD != this.registerCredentials.confirmation_password) {
            this.showPopup("Error", 'Password did not matched');
        }
        else {
            this.registerCredentials.COUNTRY_NAME = this.countries.find(function (country) {
                return country.code == _this.registerCredentials.COUNTRY_CODE;
            }).region;
            this.registerCredentials.TRANS_ID = parseInt((Math.random() * 999999999999999999999).toString()).toString().substring(0, 20);
            delete this.registerCredentials.confirmation_password;
            var reginfo = JSON.stringify(this.registerCredentials);
            this.mallApi.register({ "REGINFO": reginfo }).subscribe(function (success) {
                var response = success.json();
                if (response['STATUS_MESSAGE'] != "FAILED") {
                    _this.createSuccess = true;
                    _this.showPopup("Success", "Account created.");
                }
                else {
                    _this.showPopup("Error", response['STATUS_REMARKS']);
                }
                console.log(response);
            }, function (error) {
                _this.showPopup("Error", error);
            });
        }
        console.log(this.registerCredentials);
    };
    RegisterPage.prototype.loginCall = function () {
        this.nav.first();
    };
    RegisterPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.nav.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="signup" class="signupNav">\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col class="titleSignup">\n      Sign Up\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class="alreadyAccount">\n      Already have an account? <a href="JavaScript:void(0);" (click)="loginCall()">Login here.</a>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class="description">\n      Why join MyMerchant Mall? Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Vestibulum digniss im enim vitae odio euismod, sit amet pharetra diam condim entum\n    </ion-col>\n  </ion-row>\n  <form (ngSubmit)="register()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item class="label_app">\n              Sponsor Username:\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Sponsor Name" name="name" [(ngModel)]="registerCredentials.SPONSOR_USERID" required></ion-input>\n            </ion-item>\n            <ion-item class="label_app">\n              Name:\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Name" name="NAME" [(ngModel)]="registerCredentials.NAME" required></ion-input>\n            </ion-item>\n            <ion-item class="label_app">\n              Username:\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Username" name="NEW_USERID" [(ngModel)]="registerCredentials.NEW_USERID" required></ion-input>\n            </ion-item>\n            <ion-item class="label_app">\n              IC Number:\n            </ion-item>\n            <ion-item>\n              <ion-input type="number" placeholder="IC Number" name="IC_NO" [(ngModel)]="registerCredentials.IC_NO" required></ion-input>\n            </ion-item>\n            <ion-item class="label_app">\n              IC Type:\n            </ion-item>\n            <ion-item no-padding>\n              <ion-select name="IC_TYPE" placeholder="Choose IC Type" style="max-width: 100%;width: 100%" [(ngModel)]="registerCredentials.IC_TYPE">\n                <ion-option value="N">\n                  New IC\n                </ion-option>\n                <ion-option value="O">\n                  Old IC\n                </ion-option>\n                <ion-option value="P">\n                  Police IC\n                </ion-option>\n                <ion-option value="A">\n                  Army IC\n                </ion-option>\n                <ion-option value="T">\n                  Passport\n                </ion-option>\n                <ion-option value="C">\n                  Co Reg\n                </ion-option>\n              </ion-select>\n            </ion-item>\n            <ion-item class="label_app">\n            Phone Number:\n            </ion-item>\n            <ion-item>\n              <ion-input type="number" placeholder="Phone Number" name="TEL_MOBILE" [(ngModel)]="registerCredentials.TEL_MOBILE" required></ion-input>\n            </ion-item>\n            <ion-item class="label_app">\n            Address Line 1:\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Address line 1" name="address1" [(ngModel)]="registerCredentials.ADDRESS1" required></ion-input>\n            </ion-item>\n            <ion-item class="label_app">\n            Address Line 2:\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Address line 2" name="address2" [(ngModel)]="registerCredentials.ADDRESS2" required></ion-input>\n            </ion-item>\n            <ion-item class="label_app">\n            Postal Code:\n            </ion-item>\n            <ion-item>\n              <ion-input type="number" placeholder="Postcode" name="postcode" [(ngModel)]="registerCredentials.POSTCODE" required></ion-input>\n            </ion-item>\n            <ion-item class="label_app">\n            City:\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="City" name="city" [(ngModel)]="registerCredentials.CITY" required></ion-input>\n            </ion-item>\n            <ion-item class="label_app">\n            Country:\n            </ion-item>\n            <ion-item no-padding>\n              <ion-select name="country_code" [(ngModel)]="registerCredentials.COUNTRY_CODE" placeholder="Select your country" style="max-width: 100%;width: 100%">\n                <ion-option *ngFor="let country of countries" [value]="country.code"> {{country.region}} </ion-option>\n              </ion-select>\n            </ion-item>\n            <ion-item class="label_app">\n            State:\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="State" name="state" [(ngModel)]="registerCredentials.STATE" required></ion-input>\n            </ion-item>\n            <ion-item class="label_app">\n            Email:\n            </ion-item>\n            <ion-item>\n              <ion-input type="email" placeholder="Email" name="email" [(ngModel)]="registerCredentials.EMAILID" required></ion-input>\n            </ion-item>\n            <ion-item class="label_app">\n            Password:\n            </ion-item>\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="PASSWORD" [(ngModel)]="registerCredentials.PASSWORD" required></ion-input>\n            </ion-item>\n            <ion-item class="label_app">\n            Confirm Password:\n            </ion-item>\n            <ion-item>\n              <ion-input type="password" placeholder="Confirm Password" name="confirmation_password" [(ngModel)]="registerCredentials.confirmation_password" required></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Create My Account</button>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row class="are-merchant-signup">\n        Are you a Merchant? <a href="javascript:void(0);">Click here</a>\n      </ion-row>\n\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Asus\Desktop\Hemico\hemicoapp_new-master\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_merchant_mall_merchant_mall__["a" /* MerchantMallProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=3.js.map