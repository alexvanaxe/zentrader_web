import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalProfitReportComponent } from './total-profit-report/total-profit-report.component';
import { OverviewReportComponent } from './overview-report/overview-report.component';
import { MenuModule } from '../menu/menu.module';
import { FormsModule } from '@angular/forms';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [TotalProfitReportComponent, OverviewReportComponent, MonthlyReportComponent],
  imports: [
    CommonModule,
    FormsModule,
    MenuModule,
    SharedModule
  ],
  exports: [TotalProfitReportComponent]
})
export class ReportModule { }
