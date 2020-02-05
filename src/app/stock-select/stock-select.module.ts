import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StockSelectComponent } from './stock-select/stock-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [StockSelectComponent],
  exports: [StockSelectComponent]
})
export class StockSelectModule { }
