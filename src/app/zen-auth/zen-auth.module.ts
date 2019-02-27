import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ZentraderAuthComponent } from './zentrader-auth/zentrader-auth.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [ZentraderAuthComponent, WelcomePageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ZenAuthModule { }
