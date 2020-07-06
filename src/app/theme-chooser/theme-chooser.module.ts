import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeChooserComponent } from './theme-chooser/theme-chooser.component';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [ThemeChooserComponent],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [ThemeChooserComponent]
})
export class ThemeChooserModule { }
