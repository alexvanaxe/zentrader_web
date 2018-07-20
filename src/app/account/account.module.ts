import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountFooterComponent } from './account-footer/account-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccountFooterComponent],
  exports: [AccountFooterComponent]
})
export class AccountModule { }
