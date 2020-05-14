import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalProfitReportComponent } from './total-profit-report/total-profit-report.component';
import { OverviewReportComponent } from './overview-report/overview-report.component';
import { MenuModule } from '../menu/menu.module';
import { FormsModule } from '@angular/forms';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';



@NgModule({
  declarations: [TotalProfitReportComponent, OverviewReportComponent, MonthlyReportComponent],
  imports: [
    CommonModule,
    FormsModule,
    MenuModule
  ],
  exports: [TotalProfitReportComponent]
})
export class ReportModule { }
