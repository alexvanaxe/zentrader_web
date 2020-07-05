import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IrbrModule } from 'app/irbr/irbr.module';
import { ZenAuthModule } from 'app/zen-auth/zen-auth.module';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    IrbrModule,
    ZenAuthModule,
    UiModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
