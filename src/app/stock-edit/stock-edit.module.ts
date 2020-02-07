import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StockEditComponent } from './stock-edit/stock-edit.component';
import { AutoUpdateComponent } from './auto-update/auto-update.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [StockEditComponent, AutoUpdateComponent],
  exports: [StockEditComponent]
})
export class StockEditModule { }
