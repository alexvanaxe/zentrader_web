import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IrbrModule } from '../irbr/irbr.module';
import { NumberColorPipe } from './number-color.pipe';

@NgModule({
  imports: [
    CommonModule,
    IrbrModule
  ],
  declarations: [MenuComponent, NumberColorPipe],
  providers: [MenuComponent],
  exports: [MenuComponent, NumberColorPipe]
})
export class SharedModule { }
