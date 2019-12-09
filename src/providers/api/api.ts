import {Injectable} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";

import {Observable} from "rxjs";
import {Storage} from "@ionic/storage";

import "rxjs/add/operator/map";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const CONSTANTS = {
  is_poduction: true,
  //  url_prod: "http://hemicomall.netmgconsulting.com",
  // url_prod: "http://hemico.netmgconsulting.com",
  url_prod: "https://agent.hemico4u.com",
  url_dev: "http://localhost:8000",
  url_noti_dev: "http://35.247.131.85:4000",
  url_noti_prod: "http://35.247.131.85:4000"
};

@Injectable()
export class ApiProvider {
  // Change to this http://ed43bb3b.ngrok.io/api/login
  // Change to this http://ed43bb3b.ngrok.io/api/register
  public HOST;
  public httpOption = {
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded"
    })
  };
  access: boolean;
  token: string;

  constructor(public http: Http, public storage: Storage) {
    if (CONSTANTS.is_poduction) {
      this.HOST = CONSTANTS.url_prod;
    } else {
      this.HOST = CONSTANTS.url_dev;
    }
  }

  public params(data) {
    let params = new URLSearchParams();
    for (let k in data) {
      params.set(k, data[k]);
    }
    return params.toString();
  }

  public post(url, data, header = {}) {
    let headers = this.patchHeader(header);
    let full_url = this.HOST + url + "?" + this.params(data);

    return this.http.post(full_url, this.params(data), {headers});
  }

  public get(url, data = null, header = {}) {

    let headers = this.patchHeader(header);
    let full_url = this.HOST + url + (data ? "?" + this.params(data) : "");

    return this.http.get(full_url, {headers});
  }

  public tokenGet(url, options) {
    let observeGet = Observable.create(observer => {
      this.getToken().subscribe(token => {
        if (token) {
          this.get(url, options, {
            authorization: token
          }).subscribe(res => {
            observer.next(res);
          });
        } else {
          console.error("token not found");
        }
      });
    });
    return observeGet;
  }

  public patchHeader(header) {
    let headers = Object.assign(this.httpOption.headers);
    for (let k in header) {
      headers.set(k, header[k]);
    }
    return headers;
  }

  // Local Storage private methods

  _get(key) {
    return Observable.fromPromise(this.storage.get(key));
  }

  _set(key, value) {
    return Observable.fromPromise(this.storage.set(key, value));
  }

  _remove(key) {
    return Observable.fromPromise(this.storage.remove(key));
  }

  // Token Storage
  getToken() {
    return this._get("currentToken");
  }

  saveToken(data) {
    this.token = data;
    this.httpOption.headers.set("authorization", this.token);
    return this._set("currentToken", data);
  }

  clearToken() {
    return this._remove("currentToken");
  }

  // Get Account
  getAccount() {
    return this._get("accountDetails");
  }

  saveAccount(data) {
    return this._set("accountDetails", data);
  }

  clearAccount() {
    return this._set("accountDetails", null);
  }

  saveFCMToken(id,fcm_key,uuid){
    return this.http.post(CONSTANTS.url_noti_dev + `/users/userDetails?id=${id}&fcm=${fcm_key}&uuid=${uuid}`, {})
  }

  saveFCMTOKENwithBody(id,fcm_key,uuid,manufacter,platform,version,model){
    return this.http.post(CONSTANTS.url_noti_dev + `/users/userDetails?id=${id}&fcm=${fcm_key}&uuid=${uuid}&manu=${manufacter}&platform=${platform}&version=${version}&model=${model}`, {
      id,
      fcm_key,
      uuid,
      manufacter,
      platform,
      version,
      model,
    })
  }

  logoutFCMToken(id,uuid){
    return this.http.get(CONSTANTS.url_noti_dev + `/users/LogOut?id=${id}&uuid=${uuid}`)
  }
}
