import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperBuyCardComponent } from './paper-buy-card/paper-buy-card.component';
import { PaperBuyService } from './paper-buy.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaperBuyCardComponent],
  providers: [ PaperBuyService ]

})
export class LearningModule { }
