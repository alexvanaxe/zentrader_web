import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ZentraderAuthComponent } from './zentrader-auth/zentrader-auth.component';

@NgModule({
  declarations: [ZentraderAuthComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ZenAuthModule { }
