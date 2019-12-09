import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchantorderlistPage } from './merchantorderlist';

@NgModule({
  declarations: [
    MerchantorderlistPage,
  ],
  imports: [
    IonicPageModule.forChild(MerchantorderlistPage),
  ],
})
export class MerchantorderlistPageModule {}
