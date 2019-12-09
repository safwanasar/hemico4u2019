import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EwalletPage } from './ewallet';

@NgModule({
  declarations: [
    EwalletPage,
  ],
  imports: [
    IonicPageModule.forChild(EwalletPage),
  ],
})
export class EwalletPageModule {}
