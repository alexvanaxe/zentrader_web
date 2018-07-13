import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IrbrComponent } from './irbr/irbr.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IrbrComponent],
  exports: [IrbrComponent]
})
export class IrbrModule { }
