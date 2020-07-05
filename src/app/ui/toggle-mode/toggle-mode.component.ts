import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToggleModeService } from '../toggle-mode.service';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-toggle-mode',
  templateUrl: './toggle-mode.component.html',
  styleUrls: ['./toggle-mode.component.css']
})
export class ToggleModeComponent implements OnInit, OnDestroy {

  constructor(private toggleModeService: ToggleModeService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {}

  setNightMode() {
    this.toggleModeService.toggleModeNight();
  }

}
