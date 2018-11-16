import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { StockComponent } from './stock.component';
import {StockService} from './stock.service';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { StockSelectComponent } from './stock-select/stock-select.component';
import { SharedModule } from '../shared/shared.module';
import { ResumeService } from './resume.service';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule],
  declarations: [StockComponent, AddStockComponent, EditStockComponent, StockSelectComponent, ResumeComponent],
  exports: [StockComponent, AddStockComponent, StockSelectComponent, EditStockComponent, ResumeComponent],
  providers: [StockComponent, StockService, ResumeService]
})
export class StockModule { }
