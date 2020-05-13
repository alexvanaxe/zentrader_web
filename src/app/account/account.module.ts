import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountFooterComponent } from './account-footer/account-footer.component';
import { RiskModule } from '../risk/risk.module';
import { ReportModule } from '../report/report.module';

@NgModule({
  imports: [
    CommonModule,
    RiskModule,
    ReportModule
  ],
  declarations: [AccountFooterComponent],
  exports: [AccountFooterComponent]
})
export class AccountModule { }
