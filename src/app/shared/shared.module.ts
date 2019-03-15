import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IrbrModule } from '../irbr/irbr.module';
import { NumberColorPipe } from './number-color.pipe';
import { ZenAuthModule } from 'app/zen-auth/zen-auth.module';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [NumberColorPipe, SafePipe],
  providers: [],
  exports: [NumberColorPipe, SafePipe]
})
export class SharedModule { }
