import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BonuslistPage } from './bonuslist';

@NgModule({
  declarations: [
    BonuslistPage,
  ],
  imports: [
    IonicPageModule.forChild(BonuslistPage),
  ],
})
export class BonuslistPageModule {}
