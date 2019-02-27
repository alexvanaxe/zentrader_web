import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { StockComponent } from './stock/stock.component';
import { ExperienceFocusComponent } from './operation/experience-focus/experience-focus.component';
import { BuyFocusComponent } from './operation/buy-focus/buy-focus.component';
import { SellFocusComponent } from './operation/sell-focus/sell-focus.component';
import { OperationsCenterComponent } from './operation/operations-center/operations-center.component';
import { LearningComponent } from './learning/learning/learning.component';
import { WelcomePageComponent } from './zen-auth/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/zenindex', pathMatch: 'full' },
  { path: 'zenlogin',  component: WelcomePageComponent },
  { path: 'zenindex',  component: IndexComponent },
  { path: 'stock',  component: StockComponent },
  { path: 'experience',  component: ExperienceFocusComponent },
  { path: 'buy-focus',  component: BuyFocusComponent },
  { path: 'sell-focus',  component: SellFocusComponent },
  { path: 'operations-center',  component: OperationsCenterComponent },
  { path: 'learning',  component: LearningComponent },
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
