import { Component, OnInit, OnDestroy } from '@angular/core';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';
import { ToggleModeService } from '../../ui/toggle-mode.service';

@AutoUnsubscribe()
@Component({
  selector: 'zen-theme-chooser',
  templateUrl: './theme-chooser.component.html',
  styleUrls: ['./theme-chooser.component.css']
})
export class ThemeChooserComponent implements OnInit, OnDestroy {

  constructor(private toggleModeService: ToggleModeService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {}

  changeMode(mode: string) {
    this.toggleModeService.applyMode(mode);
  }


}
