import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FortuneTellerComponent } from './fortune-teller/fortune-teller.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [FortuneTellerComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [FortuneTellerComponent]
})
export class ZenFortuneModule { }
