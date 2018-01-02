import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { OperationComponent } from './operation/operation.component';
import {FormsModule} from '@angular/forms';
import {OperationService} from './operation/operation.service';
import {ExperienceService} from './experience/experience.service';
import { OperationTypeComponent } from './operation-type/operation-type.component';
import {OperationTypeService} from './operation-type/operation-type.service';
import { OperationListComponent } from './operation-list/operation-list.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { BuyComponent } from './buy/buy.component';
import {BuyService} from './buy/buy.service';
import { BuyListComponent } from './buy-list/buy-list.component';
import { SellComponent } from './sell/sell.component';
import {SellService} from './sell/sell.service';
import {StockModule} from '../stock/stock.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StockModule
  ],
  declarations: [
    ExperienceComponent,
    OperationComponent,
    OperationTypeComponent,
    OperationListComponent,
    ExperienceListComponent,
    BuyComponent,
    BuyListComponent,
    SellComponent],
  exports: [
    ExperienceComponent,
    OperationComponent,
    OperationListComponent,
    ExperienceListComponent,
    BuyComponent,
    BuyListComponent,
    SellComponent],
  providers: [
    OperationService,
    ExperienceService,
    OperationTypeService,
    BuyService,
    SellService]
})
export class OperationModule { }
