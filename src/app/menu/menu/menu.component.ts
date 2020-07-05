import { Component, OnInit, OnDestroy } from '@angular/core';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnDestroy() {}

  ngOnInit() {
  }
}
