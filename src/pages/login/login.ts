import {Component} from "@angular/core";
import {
  IonicPage,
  NavController,
  AlertController,
  LoadingController,
  Loading
} from "ionic-angular";
import {MerchantMallProvider} from "../../providers/merchant-mall/merchant-mall";
import { FCM } from '@ionic-native/fcm';
import { ApiProvider } from '../../providers/api/api'
import { Device } from '@ionic-native/device'

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  loading: Loading;
  loginCredentials = {USERID: "", PASSWORD: ""};
  uniqueID:any

  constructor(
    public nav: NavController,
    private mallApi: MerchantMallProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public fcm : FCM,
    public api: ApiProvider,
    public device: Device
  ) {
  }

  public ngOnInit() {
    // this.goToHome();
    this.mallApi.getMyaccount().subscribe(res => {
      if (null != res) this.goToMyacc();
    });
  }

  public createAccount() {
    this.nav.push("RegisterPage");
  }

  public goToHome() {
    this.mallApi.home().subscribe(response => {
      let home = response.json();

      if (home["STATUS_MESSAGE"] != "FAILED") {
        this.nav.setRoot("HomePage", {home});
      }
    });
  }

  public goToMyacc() {
    this.nav.setRoot("HomePage");
  }

  public login() {
    this.showLoading();

    this.mallApi.login(this.loginCredentials).subscribe(
      success => {
        let response = success.json();

        if (response["STATUS_MESSAGE"] != "FAILED") {
          /*alert(response["LOGINID"] ); */
          this.showPopup("Success", "Logged in.");

          // let token = response.token || "ABCD1234";
          let token = response.token || "AGENTHEMICO$886688";

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
          
          let manufacter = this.device.manufacturer
          let platform = this.device.platform
          let version = this.device.version
          let model = this.device.model
          let device_id = this.device.uuid

          
          
          this.fcm.getToken().then(data => {
            this.api.saveFCMTOKENwithBody(response["LOGINID"],data,device_id,manufacter,platform,version,model).subscribe( data => {
              console.log(data)
            })
          })
          // this.goToHome()
          this.mallApi.saveToken(token);

          this.mallApi.saveAccount({...response, token}).subscribe(res => {
            this.goToMyacc();
          });
        } else {
          this.showError(response["STATUS_REMARKS"]);
        }
      },
      error => {
        this.showError(error);
      }
    );
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Please wait...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();
    this.showPopup("Error", text);
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: ["OK"]
    });
    alert.present();
  }
}
