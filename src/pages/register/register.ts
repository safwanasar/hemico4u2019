import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { MerchantMallProvider } from '../../providers/merchant-mall/merchant-mall';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export const COUNTRIES = [{"region":"ALBANIA","code":"AL","postcode":""},{"region":"ALGERIA","code":"DZ","postcode":""},{"region":"ANDORRA","code":"AD","postcode":""},{"region":"ANGOLA","code":"AO","postcode":""},{"region":"ANGUILLA","code":"AI","postcode":""},{"region":"ANTIGUA & BARBUDA","code":"AG","postcode":""},{"region":"ARGENTINA","code":"AR","postcode":"Required"},{"region":"ARMENIA","code":"AM","postcode":""},{"region":"ARUBA","code":"AW","postcode":""},{"region":"AUSTRALIA","code":"AU","postcode":"Required"},{"region":"AUSTRIA","code":"AT","postcode":"Required"},{"region":"AZERBAIJAN","code":"AZ","postcode":""},{"region":"BAHAMAS","code":"BS","postcode":""},{"region":"BAHRAIN","code":"BH","postcode":""},{"region":"BARBADOS","code":"BB","postcode":""},{"region":"BELARUS","code":"BY","postcode":""},{"region":"BELGIUM","code":"BE","postcode":""},{"region":"BELIZE","code":"BZ","postcode":""},{"region":"BENIN","code":"BJ","postcode":""},{"region":"BERMUDA","code":"BM","postcode":""},{"region":"BHUTAN","code":"BT","postcode":"Required"},{"region":"BOLIVIA","code":"BO","postcode":""},{"region":"BOSNIA & HERZEGOVINA","code":"BA","postcode":""},{"region":"BOTSWANA","code":"BW","postcode":""},{"region":"BRAZIL","code":"BR","postcode":"Required"},{"region":"BRITISH VIRGIN ISLANDS","code":"VG","postcode":""},{"region":"BRUNEI","code":"BN","postcode":""},{"region":"BULGARIA","code":"BG","postcode":""},{"region":"BURKINA FASO","code":"BF","postcode":""},{"region":"BURUNDI","code":"BI","postcode":""},{"region":"CAMBODIA","code":"KH","postcode":""},{"region":"CAMEROON","code":"CM","postcode":""},{"region":"CANADA","code":"CA","postcode":"Required"},{"region":"CAPE VERDE","code":"CV","postcode":""},{"region":"CAYMAN ISLANDS","code":"KY","postcode":""},{"region":"CHAD","code":"TD","postcode":""},{"region":"CHILE","code":"CL","postcode":""},{"region":"CHINA","code":"C2","postcode":"Required"},{"region":"COLOMBIA","code":"CO","postcode":""},{"region":"COMOROS","code":"KM","postcode":"Required"},{"region":"CONGO - BRAZZAVILLE","code":"CG","postcode":""},{"region":"CONGO - KINSHASA","code":"CD","postcode":""},{"region":"COOK ISLANDS","code":"CK","postcode":""},{"region":"COSTA RICA","code":"CR","postcode":""},{"region":"CÔTE D’IVOIRE","code":"CI","postcode":""},{"region":"CROATIA","code":"HR","postcode":""},{"region":"CYPRUS","code":"CY","postcode":""},{"region":"CZECH REPUBLIC","code":"CZ","postcode":""},{"region":"DENMARK","code":"DK","postcode":"Required"},{"region":"DJIBOUTI","code":"DJ","postcode":""},{"region":"DOMINICA","code":"DM","postcode":""},{"region":"DOMINICAN REPUBLIC","code":"DO","postcode":""},{"region":"ECUADOR","code":"EC","postcode":""},{"region":"EGYPT","code":"EG","postcode":""},{"region":"EL SALVADOR","code":"SV","postcode":""},{"region":"ERITREA","code":"ER","postcode":""},{"region":"ESTONIA","code":"EE","postcode":""},{"region":"ETHIOPIA","code":"ET","postcode":""},{"region":"FALKLAND ISLANDS","code":"FK","postcode":"Required"},{"region":"FAROE ISLANDS","code":"FO","postcode":"Required"},{"region":"FIJI","code":"FJ","postcode":""},{"region":"FINLAND","code":"FI","postcode":""},{"region":"FRANCE","code":"FR","postcode":"Required"},{"region":"FRENCH GUIANA","code":"GF","postcode":""},{"region":"FRENCH POLYNESIA","code":"PF","postcode":""},{"region":"GABON","code":"GA","postcode":""},{"region":"GAMBIA","code":"GM","postcode":"Required"},{"region":"GEORGIA","code":"GE","postcode":""},{"region":"GERMANY","code":"DE","postcode":"Required"},{"region":"GIBRALTAR","code":"GI","postcode":""},{"region":"GREECE","code":"GR","postcode":""},{"region":"GREENLAND","code":"GL","postcode":"Required"},{"region":"GRENADA","code":"GD","postcode":""},{"region":"GUADELOUPE","code":"GP","postcode":""},{"region":"GUATEMALA","code":"GT","postcode":""},{"region":"GUINEA","code":"GN","postcode":""},{"region":"GUINEA-BISSAU","code":"GW","postcode":""},{"region":"GUYANA","code":"GY","postcode":""},{"region":"HONDURAS","code":"HN","postcode":""},{"region":"HONG KONG SAR CHINA","code":"HK","postcode":""},{"region":"HUNGARY","code":"HU","postcode":""},{"region":"ICELAND","code":"IS","postcode":""},{"region":"INDIA","code":"IN","postcode":""},{"region":"INDONESIA","code":"ID","postcode":""},{"region":"IRELAND","code":"IE","postcode":""},{"region":"ISRAEL","code":"IL","postcode":""},{"region":"ITALY","code":"IT","postcode":"Required"},{"region":"JAMAICA","code":"JM","postcode":""},{"region":"JAPAN","code":"JP","postcode":"Required"},{"region":"JORDAN","code":"JO","postcode":""},{"region":"KAZAKHSTAN","code":"KZ","postcode":""},{"region":"KENYA","code":"KE","postcode":""},{"region":"KIRIBATI","code":"KI","postcode":"Required"},{"region":"KUWAIT","code":"KW","postcode":""},{"region":"KYRGYZSTAN","code":"KG","postcode":"Required"},{"region":"LAOS","code":"LA","postcode":""},{"region":"LATVIA","code":"LV","postcode":""},{"region":"LESOTHO","code":"LS","postcode":""},{"region":"LIECHTENSTEIN","code":"LI","postcode":""},{"region":"LITHUANIA","code":"LT","postcode":""},{"region":"LUXEMBOURG","code":"LU","postcode":""},{"region":"MACEDONIA","code":"MK","postcode":""},{"region":"MADAGASCAR","code":"MG","postcode":""},{"region":"MALAWI","code":"MW","postcode":"Required"},{"region":"MALAYSIA","code":"MY","postcode":""},{"region":"MALDIVES","code":"MV","postcode":""},{"region":"MALI","code":"ML","postcode":""},{"region":"MALTA","code":"MT","postcode":""},{"region":"MARSHALL ISLANDS","code":"MH","postcode":""},{"region":"MARTINIQUE","code":"MQ","postcode":""},{"region":"MAURITANIA","code":"MR","postcode":"Required"},{"region":"MAURITIUS","code":"MU","postcode":""},{"region":"MAYOTTE","code":"YT","postcode":"Required"},{"region":"MEXICO","code":"MX","postcode":"Required"},{"region":"MICRONESIA","code":"FM","postcode":""},{"region":"MOLDOVA","code":"MD","postcode":""},{"region":"MONACO","code":"MC","postcode":""},{"region":"MONGOLIA","code":"MN","postcode":""},{"region":"MONTENEGRO","code":"ME","postcode":""},{"region":"MONTSERRAT","code":"MS","postcode":""},{"region":"MOROCCO","code":"MA","postcode":""},{"region":"MOZAMBIQUE","code":"MZ","postcode":""},{"region":"NAMIBIA","code":"NA","postcode":""},{"region":"NAURU","code":"NR","postcode":"Required"},{"region":"NEPAL","code":"NP","postcode":""},{"region":"NETHERLANDS","code":"NL","postcode":"Required"},{"region":"NEW CALEDONIA","code":"NC","postcode":""},{"region":"NEW ZEALAND","code":"NZ","postcode":""},{"region":"NICARAGUA","code":"NI","postcode":""},{"region":"NIGER","code":"NE","postcode":"Required"},{"region":"NIGERIA","code":"NG","postcode":""},{"region":"NIUE","code":"NU","postcode":"Required"},{"region":"NORFOLK ISLAND","code":"NF","postcode":"Required"},{"region":"NORWAY","code":"NO","postcode":"Required"},{"region":"OMAN","code":"OM","postcode":""},{"region":"PALAU","code":"PW","postcode":""},{"region":"PANAMA","code":"PA","postcode":""},{"region":"PAPUA NEW GUINEA","code":"PG","postcode":""},{"region":"PARAGUAY","code":"PY","postcode":""},{"region":"PERU","code":"PE","postcode":""},{"region":"PHILIPPINES","code":"PH","postcode":""},{"region":"PITCAIRN ISLANDS","code":"PN","postcode":"Required"},{"region":"POLAND","code":"PL","postcode":"Required"},{"region":"PORTUGAL","code":"PT","postcode":""},{"region":"QATAR","code":"QA","postcode":""},{"region":"RÉUNION","code":"RE","postcode":""},{"region":"ROMANIA","code":"RO","postcode":""},{"region":"RUSSIA","code":"RU","postcode":"Required"},{"region":"RWANDA","code":"RW","postcode":""},{"region":"SAMOA","code":"WS","postcode":""},{"region":"SAN MARINO","code":"SM","postcode":""},{"region":"SÃO TOMÉ & PRÍNCIPE","code":"ST","postcode":""},{"region":"SAUDI ARABIA","code":"SA","postcode":""},{"region":"SENEGAL","code":"SN","postcode":""},{"region":"SERBIA","code":"RS","postcode":""},{"region":"SEYCHELLES","code":"SC","postcode":""},{"region":"SIERRA LEONE","code":"SL","postcode":""},{"region":"SINGAPORE","code":"SG","postcode":"Required"},{"region":"SLOVAKIA","code":"SK","postcode":""},{"region":"SLOVENIA","code":"SI","postcode":""},{"region":"SOLOMON ISLANDS","code":"SB","postcode":""},{"region":"SOMALIA","code":"SO","postcode":""},{"region":"SOUTH AFRICA","code":"ZA","postcode":""},{"region":"SOUTH KOREA","code":"KR","postcode":""},{"region":"SPAIN","code":"ES","postcode":"Required"},{"region":"SRI LANKA","code":"LK","postcode":""},{"region":"ST. HELENA","code":"SH","postcode":"Required"},{"region":"ST. KITTS & NEVIS","code":"KN","postcode":""},{"region":"ST. LUCIA","code":"LC","postcode":""},{"region":"ST. PIERRE & MIQUELON","code":"PM","postcode":"Required"},{"region":"ST. VINCENT & GRENADINES","code":"VC","postcode":""},{"region":"SURINAME","code":"SR","postcode":"Required"},{"region":"SVALBARD & JAN MAYEN","code":"SJ","postcode":"Required"},{"region":"SWAZILAND","code":"SZ","postcode":""},{"region":"SWEDEN","code":"SE","postcode":"Required"},{"region":"SWITZERLAND","code":"CH","postcode":"Required"},{"region":"TAIWAN","code":"TW","postcode":""},{"region":"TAJIKISTAN","code":"TJ","postcode":""},{"region":"TANZANIA","code":"TZ","postcode":""},{"region":"THAILAND","code":"TH","postcode":""},{"region":"TOGO","code":"TG","postcode":""},{"region":"TONGA","code":"TO","postcode":""},{"region":"TRINIDAD & TOBAGO","code":"TT","postcode":""},{"region":"TUNISIA","code":"TN","postcode":""},{"region":"TURKMENISTAN","code":"TM","postcode":""},{"region":"TURKS & CAICOS ISLANDS","code":"TC","postcode":""},{"region":"TUVALU","code":"TV","postcode":"Required"},{"region":"UGANDA","code":"UG","postcode":""},{"region":"UKRAINE","code":"UA","postcode":""},{"region":"UNITED ARAB EMIRATES","code":"AE","postcode":""},{"region":"UNITED KINGDOM","code":"GB","postcode":"Required"},{"region":"UNITED STATES","code":"US","postcode":"Required"},{"region":"URUGUAY","code":"UY","postcode":""},{"region":"VANUATU","code":"VU","postcode":""},{"region":"VATICAN CITY","code":"VA","postcode":"Required"},{"region":"VENEZUELA","code":"VE","postcode":""},{"region":"VIETNAM","code":"VN","postcode":""},{"region":"WALLIS & FUTUNA","code":"WF","postcode":"Required"},{"region":"YEMEN","code":"YE","postcode":""},{"region":"ZAMBIA","code":"ZM","postcode":""},{"region":"ZIMBABWE","code":"ZW","postcode":""}];
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  countries = COUNTRIES;
  createSuccess = false;
  registerCredentials = {
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
}

  constructor(
    private nav: NavController,
    private mallApi: MerchantMallProvider,
    private alertCtrl: AlertController
  ) {}

  public register() {
    if (this.registerCredentials.PASSWORD != this.registerCredentials.confirmation_password) {
      this.showPopup("Error", 'Password did not matched');
    } else {
      this.registerCredentials.COUNTRY_NAME = this.countries.find((country)=>{
        return country.code==this.registerCredentials.COUNTRY_CODE
      }).region;
      this.registerCredentials.TRANS_ID = parseInt((Math.random()*999999999999999999999).toString()).toString().substring(0,20)

      delete this.registerCredentials.confirmation_password

      let reginfo = JSON.stringify(this.registerCredentials);
      this.mallApi.register({"REGINFO":reginfo}).subscribe(
        success => {
          let response = success.json()
          if (response['STATUS_MESSAGE']!="FAILED") {
            this.createSuccess = true;
            this.showPopup("Success", "Account created.");
          } else {
            this.showPopup("Error", response['STATUS_REMARKS']);
          }
          console.log(response)
        },
        error => {
          this.showPopup("Error", error);
        }
      );
    }
    console.log(this.registerCredentials)
  }

  public loginCall() {
    this.nav.first();
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

}
