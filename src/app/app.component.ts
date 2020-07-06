import { Component, OnInit, OnDestroy } from '@angular/core';
import { AutoUnsubscribe } from './shared/auto-unsubscribe';
import { ToggleModeService } from './ui/toggle-mode.service';

@AutoUnsubscribe()
@Component({
  selector: 'zen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Zentrader';

  constructor(private toggleModeService: ToggleModeService) { }

  ngOnInit(): void {
    this.toggleModeService.restoreMode();
  }

  ngOnDestroy() {}

}
