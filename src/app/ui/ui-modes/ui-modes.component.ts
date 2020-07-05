import { Component, OnInit, OnDestroy, Inject, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ToggleModeService } from '../toggle-mode.service';

@Component({
  selector: 'zen-ui-modes',
  templateUrl: './ui-modes.component.html',
  styleUrls: ['./ui-modes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UiModesComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, private toggleModeService: ToggleModeService) { }

  ngOnInit(): void {
    if (this.toggleModeService.isNightMode()) {
      //this._document.classList.add('zen-menu-bg-night');
    }
    else {
      //this._document.classList.add('zen-menu-bg');
    }
  }

}
