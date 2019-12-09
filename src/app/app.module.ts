import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule, Platform, AlertController } from "ionic-angular";
import { MyApp } from "./app.component";
import { ListPage } from "../pages/list/list";
import { LoginPage } from "../pages/login/login";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { IonicStorageModule } from "@ionic/storage";
import { MerchantMallProvider } from "../providers/merchant-mall/merchant-mall";
import { ApiProvider } from "../providers/api/api";
import { OneSignal } from '@ionic-native/onesignal';
import { StorageProvider } from "../providers/storage/storage";
import { LoadingProvider } from "../providers/loading/loading";
import { NotificationsProvider } from '../providers/notifications/notifications';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { FCM } from '@ionic-native/fcm';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Device } from '@ionic-native/device'

const firebaseConfig = {
  apiKey: "AIzaSyCERykbjTXbKsZu3JFlwsX6JIbPbOOWMKI",
  authDomain: "hemico-app-98c3a.firebaseapp.com",
  databaseURL: "https://hemico-app-98c3a.firebaseio.com",
  projectId: "hemico-app-98c3a",
  storageBucket: "hemico-app-98c3a.appspot.com",
  messagingSenderId: "847269229484",
  appId: "1:847269229484:web:e4c2d9c1ba8698f2"
}

@NgModule({
  declarations: [MyApp, ListPage, LoginPage],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, ListPage, LoginPage],
  exports: [],
  providers: [
    StatusBar,
    SplashScreen,
    DocumentViewer,
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider,
    MerchantMallProvider,
    StorageProvider,
    LoadingProvider,
    NotificationsProvider,
    OneSignal,
    FCM,
    AngularFireDatabase,
    LocalNotifications,
    // Platform,  
    AlertController,
    Device
  ]
})
export class AppModule {}