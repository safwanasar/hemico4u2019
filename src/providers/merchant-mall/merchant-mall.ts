import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { ApiProvider } from "../api/api";
import { Observable } from "rxjs";

/*
  Generated class for the MerchantMallProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class MerchantMallProvider {

  public token;
  // public HEADER_AUTH_TOKEN = 'ABCD1234';
  public HEADER_AUTH_TOKEN = "AGENTHEMICO$886688";

  constructor(public http: Http, public api: ApiProvider) {
    // console.log("Hello MerchantMallProvider Provider");
    this.getToken().subscribe(token => {
      this.token = token;
    });
  }

  // Auth
  public login(data) {
    // return this.api.get("/API/AgentLogin.asp", data, { authorization: "ABCD1234" });
    return this.api.get("/API/AgentLogin.asp", data, { authorization: this.HEADER_AUTH_TOKEN });
  }

  public logout() {
    this.clearToken();
    this.clearAccount();
  }

  public register(data) {
    return this.api.post("/Registration.asp", data);
  }

  // Util
  public orderlist(data) {
    return this.api.get(
      "/API/PurchaseHistory.asp",
      { UserId: data.USERID, Language: "ENG" },
      { authorization: data.token }
    );
  }
  public oderdetail(data) {
    return this.api.get(
      "/API/PurchaseHistory.asp",
      { UserId: data.USERID, OrderId: data.orderID, Language: "ENG" },
      { authorization: data.token }
    );
  }

  public bonuslist(data) {
    return this.api.get(
      "/API/AgentMonthBonusStmt.asp",
      { UserId: data.USERID },
      { authorization: data.token }
    );
  }

  public bonusdetail(data) {
    return this.api.get(
      "/API/AgentBonusStmt.asp",
      {
        USERID: data.USERID,
        MONTH: data.MONTH,
        YEAR: data.YEAR,
        Language: "ENG"
      },
      { authorization: data.token }
    );
  }

  public agentcount(data) {
    return this.api.get(
      "/API/AgentNetworkCount.asp",
      { UserId: data.USERID },
      { authorization: data.token }
    );
  }

  public groupsales(data) {
    return this.api.get(
      "/API/AgentNetworkGroupSales.asp",
      { UserId: data.USERID },
      { authorization: data.token }
    );
  }

  public ewallet(data) {
    return this.api.get(
      "/API/AgentEWalletStmt.asp",
      { UserId: data.USERID },
      { authorization: data.token }
    );
  }

  public categoryList() {
    return this.api.tokenGet("/API/GetCategoryList.asp", { Language: "ENG" });
  }

  // Token Storage
  getToken() {
    return this.api.getToken();
  }

  saveToken(data) {
    return this.api.saveToken(data);
  }

  clearToken() {
    return this.api.clearToken();
  }

  // page
  public home() {
    return this.api.tokenGet("/api/home.asp", { Language: "ENG" });
  }
  public getProductByCategory(CategoryId) {
    return this.api.tokenGet("/api/GetProductList.asp", {
      Language: "ENG",
      CategoryId
    });
  }
  public getProduct(ProdCode) {
    return this.api.tokenGet("/api/GetProductDetails.asp", {
      Language: "ENG",
      ProdCode
    });
  }

  // acc
  public saveAccount(data) {
    return this.api.saveAccount(data);
  }
  public getMyaccount() {
    return this.api.getAccount();
  }
  public clearAccount() {
    return this.api.clearAccount();
  }
}
