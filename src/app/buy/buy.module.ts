import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickBuyComponent } from './quick-buy/quick-buy.component';

@NgModule({
  declarations: [QuickBuyComponent],
  imports: [
    CommonModule
  ],
  exports: [
    QuickBuyComponent
  ]
})
export class BuyModule { }
