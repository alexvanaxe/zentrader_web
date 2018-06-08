import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CommonModule, registerLocaleData} from '@angular/common';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { StockModule } from './stock/stock.module';
import { OperationModule } from './operation/operation.module';
import { OverviewModule } from 'app/overview/overview.module';


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
    StockModule,
    OperationModule,
    OverviewModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
