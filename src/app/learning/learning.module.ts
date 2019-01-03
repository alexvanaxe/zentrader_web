import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperBuyCardComponent } from './paper-buy-card/paper-buy-card.component';
import { PaperBuyService } from './paper-buy.service';
import { LearningComponent } from './learning/learning.component';
import { SharedModule } from '../shared/shared.module';
import { StockModule } from '../stock/stock.module';
import { PaperQuickBuyComponent } from './paper-quick-buy/paper-quick-buy.component';
import { PaperBuyEditComponent } from './paper-buy-edit/paper-buy-edit.component';
import { FormsModule } from '@angular/forms';
import { PaperSellCardComponent } from './paper-sell-card/paper-sell-card.component';
import { PaperQuickSellComponent } from './paper-quick-sell/paper-quick-sell.component';
import { PaperSellEditComponent } from './paper-sell-edit/paper-sell-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StockModule,
    SharedModule
  ],
  declarations: [PaperBuyCardComponent, LearningComponent, PaperQuickBuyComponent, PaperBuyEditComponent, PaperSellCardComponent, PaperQuickSellComponent, PaperSellEditComponent],
  exports: [ PaperQuickBuyComponent ],
  providers: [ PaperBuyService ]

})
export class LearningModule { }
