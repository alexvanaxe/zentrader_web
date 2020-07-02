import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StockComponent } from './stock.component';
import { StockService } from './stock.service';
import { AddStockComponent } from './add-stock/add-stock.component';
import { SharedModule } from '../shared/shared.module';
import { ResumeService } from './resume.service';
import { ResumeComponent } from './resume/resume.component';
import { MenuModule } from 'app/menu/menu.module';
import { StockCardComponent } from './stock-card/stock-card.component';
import { StockEditModule } from 'app/stock-edit/stock-edit.module';
import { ExperienceCreateModule } from 'app/experience-create/experience-create.module';
import { ExperienceModule } from 'app/experience/experience.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    SharedModule,
    StockEditModule,
    ExperienceCreateModule,
    ExperienceModule,
    MenuModule],
  declarations: [StockComponent, AddStockComponent, ResumeComponent, StockCardComponent],
  exports: [StockComponent, AddStockComponent, ResumeComponent],
  providers: [StockComponent, StockService, ResumeService]
})
export class StockModule { }
