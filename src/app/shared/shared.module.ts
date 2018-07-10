import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenuComponent],
  providers: [MenuComponent],
  exports: [MenuComponent]
})
export class SharedModule { }
