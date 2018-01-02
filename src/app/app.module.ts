import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {AppRoutingModule} from './app-routing.module';
import {StockModule} from './stock/stock.module';
import {OperationModule} from './operation/operation.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StockModule,
    OperationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
