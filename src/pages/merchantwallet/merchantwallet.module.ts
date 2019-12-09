import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchantwalletPage } from './merchantwallet';

@NgModule({
  declarations: [
    MerchantwalletPage,
  ],
  imports: [
    IonicPageModule.forChild(MerchantwalletPage),
  ],
})
export class MerchantwalletPageModule {}
