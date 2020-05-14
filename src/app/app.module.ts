import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, registerLocaleData } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { StockModule } from './stock/stock.module';
import { OperationModule } from './operation/operation.module';
import { OverviewModule } from 'app/overview/overview.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LearningModule } from './learning/learning.module';
import { ZenAuthModule } from './zen-auth/zen-auth.module';
import { MenuModule } from './menu/menu.module';
import localePt from '@angular/common/locales/pt';
import { ReportModule } from './report/report.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ZenAuthModule,
    StockModule,
    OperationModule,
    LearningModule,
    OverviewModule,
    SharedModule,
    MenuModule,
    ReportModule,
    BrowserAnimationsModule,
  ],
  exports: [],
  providers: [ { provide: LOCALE_ID, useValue: 'pt' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
