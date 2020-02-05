import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StockSelectModule } from 'app/stock-select/stock-select.module';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [ExperienceComponent],
  imports: [
    CommonModule,
    FormsModule,
    StockSelectModule
  ],
  exports: [ExperienceComponent]
})
export class ExperienceCreateModule { }
