import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StockComponent } from './stock.component';
import { StockService } from './stock.service';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { SharedModule } from '../shared/shared.module';
import { ResumeService } from './resume.service';
import { ResumeComponent } from './resume/resume.component';
import { MenuModule } from 'app/menu/menu.module';
import { StockCardComponent } from './stock-card/stock-card.component';
import { AutoUpdateComponent } from './auto-update/auto-update.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    SharedModule,
    MenuModule],
  declarations: [StockComponent, AddStockComponent, EditStockComponent, ResumeComponent, StockCardComponent, AutoUpdateComponent],
  exports: [StockComponent, AddStockComponent, EditStockComponent, ResumeComponent],
  providers: [StockComponent, StockService, ResumeService]
})
export class StockModule { }
