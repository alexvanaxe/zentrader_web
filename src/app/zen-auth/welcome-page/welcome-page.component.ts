import { Component, OnInit, OnDestroy, Inject, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'zen-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class WelcomePageComponent implements OnInit, OnDestroy {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit() {
    this._document.body.classList.add('bg');
  }

  ngOnDestroy() {
    this._document.body.classList.remove('bg');
  }

}
