import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ZenAuthModule } from 'app/zen-auth/zen-auth.module';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    ZenAuthModule,
    UiModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
