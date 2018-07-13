import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IrbrModule } from '../irbr/irbr.module';

@NgModule({
  imports: [
    CommonModule,
    IrbrModule
  ],
  declarations: [MenuComponent],
  providers: [MenuComponent],
  exports: [MenuComponent]
})
export class SharedModule { }
