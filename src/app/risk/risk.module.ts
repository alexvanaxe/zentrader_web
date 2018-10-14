import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskService } from './risk.service';
import { SharkComponent } from './shark/shark.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharkComponent],
  exports: [SharkComponent]
})
export class RiskModule { }
