import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StockModule,
    SharedModule
  ],
  declarations: [
    ExperienceComponent,
    ExperienceListComponent,
    BuyComponent,
    BuyListComponent,
    SellComponent,
    ExperienceFocusComponent,
    BuyFocusComponent],
  exports: [
    ExperienceComponent,
    ExperienceListComponent,
    BuyComponent,
    BuyListComponent,
    SellComponent],
  providers: [
    ExperienceService,
    BuyService,
    SellService]
})
export class OperationModule { }
