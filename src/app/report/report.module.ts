import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalProfitReportComponent } from './total-profit-report/total-profit-report.component';



@NgModule({
  declarations: [TotalProfitReportComponent],
  imports: [
    CommonModule
  ],
  exports: [TotalProfitReportComponent]
})
export class ReportModule { }
