import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsOverviewComponent } from './operations-overview/operations-overview.component';
import { OperationModule } from 'app/operation/operation.module';
import { IrbrModule } from '../irbr/irbr.module';
import { AccountModule } from '../account/account.module';
import { PostofficeModule } from '../postoffice/postoffice.module';
import { StockModule } from '../stock/stock.module';
import { MenuModule } from 'app/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    OperationModule,
    StockModule,
    IrbrModule,
    MenuModule,
    AccountModule,
    PostofficeModule
  ],
  declarations: [OperationsOverviewComponent],
  exports: [OperationsOverviewComponent]
})
export class OverviewModule { }
