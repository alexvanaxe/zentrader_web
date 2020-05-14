import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountFooterComponent } from './account-footer/account-footer.component';
import { RiskModule } from '../risk/risk.module';

@NgModule({
  imports: [
    CommonModule,
    RiskModule,
  ],
  declarations: [AccountFooterComponent],
  exports: [AccountFooterComponent]
})
export class AccountModule { }
