import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { StockModule } from './stock/stock.module';
import { OperationModule } from './operation/operation.module';
import { OverviewModule } from "app/overview/overview.module";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StockModule,
    OperationModule,
    OverviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
