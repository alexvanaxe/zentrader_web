import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModesComponent } from './ui-modes/ui-modes.component';
import { ToggleModeComponent } from './toggle-mode/toggle-mode.component';



@NgModule({
  declarations: [UiModesComponent, ToggleModeComponent],
  imports: [
    CommonModule
  ],
  exports: [UiModesComponent, ToggleModeComponent]
})
export class UiModule { }
