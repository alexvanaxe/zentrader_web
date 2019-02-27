import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ZentraderAuthComponent } from './zentrader-auth/zentrader-auth.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LogoffComponent } from './logoff/logoff.component';

@NgModule({
  declarations: [ZentraderAuthComponent, WelcomePageComponent, LogoffComponent],
  exports: [LogoffComponent, ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ZenAuthModule { }
