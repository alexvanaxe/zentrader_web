import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ExperienceService } from './experience/experience.service';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { BuyComponent } from './buy/buy.component';
import { BuyService } from './buy/buy.service';
import { BuyListComponent } from './buy-list/buy-list.component';
import { SellComponent } from './sell/sell.component';
import { SellService } from './sell/sell.service';
import { StockModule } from '../stock/stock.module';
import { ExperienceFocusComponent } from './experience-focus/experience-focus.component';
import { BuyFocusComponent } from './buy-focus/buy-focus.component';
import { SharedModule } from '../shared/shared.module';
import { OperationAccordionComponent } from './operation-accordion/operation-accordion.component';
import { NoteModule } from '../note/note.module';
import { PostofficeModule } from '../postoffice/postoffice.module';
import { QuickBuyComponent } from './quick-buy/quick-buy.component';
import { QuickSellComponent } from './quick-sell/quick-sell.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StockModule,
    NoteModule,
    SharedModule,
    NgbModule,
    PostofficeModule
  ],
  declarations: [
    ExperienceComponent,
    ExperienceListComponent,
    BuyComponent,
    BuyListComponent,
    SellComponent,
    ExperienceFocusComponent,
    BuyFocusComponent,
    OperationAccordionComponent,
    QuickBuyComponent,
    QuickSellComponent],
  exports: [
    ExperienceComponent,
    ExperienceListComponent,
    BuyComponent,
    BuyListComponent,
    SellComponent,
    OperationAccordionComponent],
  providers: [
    ExperienceService,
    BuyService,
    SellService]
})
export class OperationModule { }
