import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {StockComponent} from './stock/stock.component';

const routes: Routes = [
  {path: '', redirectTo: '/zenindex', pathMatch: 'full'},
  { path: 'zenindex',  component: IndexComponent},
  { path: 'stock',  component: StockComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
