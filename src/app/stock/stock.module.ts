import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { StockComponent } from './stock.component';
import {StockService} from './stock.service';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule],
  declarations: [StockComponent, AddStockComponent, EditStockComponent],
  exports: [StockComponent, AddStockComponent],
  providers: [StockComponent, StockService]
})
export class StockModule { }
