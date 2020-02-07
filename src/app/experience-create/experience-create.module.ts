import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StockSelectModule } from 'app/stock-select/stock-select.module';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceCreateNoStockComponent } from './experience-create-no-stock/experience-create-no-stock.component';
import { ExperienceAccordionComponent } from './experience-accordion/experience-accordion.component';

@NgModule({
  declarations: [ExperienceComponent, ExperienceCreateNoStockComponent, ExperienceAccordionComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    StockSelectModule
  ],
  exports: [ExperienceComponent, ExperienceCreateNoStockComponent, ExperienceAccordionComponent]
})
export class ExperienceCreateModule { }
