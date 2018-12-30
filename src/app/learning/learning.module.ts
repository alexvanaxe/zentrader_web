import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperBuyCardComponent } from './paper-buy-card/paper-buy-card.component';
import { PaperBuyService } from './paper-buy.service';
import { LearningComponent } from './learning/learning.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PaperBuyCardComponent, LearningComponent],
  providers: [ PaperBuyService ]

})
export class LearningModule { }
