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
import { AuthGuard } from './zen-auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/zenindex', pathMatch: 'full' },
  { path: 'zenlogin',  component: WelcomePageComponent },
  { path: 'zenindex',  component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'stock',  component: StockComponent, canActivate: [AuthGuard] },
  { path: 'experience',  component: ExperienceFocusComponent, canActivate: [AuthGuard] },
  { path: 'buy-focus',  component: BuyFocusComponent, canActivate: [AuthGuard] },
  { path: 'sell-focus',  component: SellFocusComponent, canActivate: [AuthGuard] },
  { path: 'operations-center',  component: OperationsCenterComponent, canActivate: [AuthGuard] },
  { path: 'learning',  component: LearningComponent, canActivate: [AuthGuard] },
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
