import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ZentraderAuthComponent } from './zentrader-auth/zentrader-auth.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LogoffComponent } from './logoff/logoff.component';
import { PostofficeModule } from 'app/postoffice/postoffice.module';
import { ZenFortuneModule } from 'app/zen-fortune/zen-fortune.module';

@NgModule({
  declarations: [ZentraderAuthComponent, WelcomePageComponent, LogoffComponent],
  exports: [LogoffComponent, ],
  imports: [
    CommonModule,
    FormsModule,
    PostofficeModule,
    ZenFortuneModule
  ]
})
export class ZenAuthModule { }
