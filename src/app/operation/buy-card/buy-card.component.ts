import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';

import { Buy } from '../model/buy';

@Component({
  selector: 'zen-buy-card',
  templateUrl: './buy-card.component.html',
  styleUrls: ['./buy-card.component.css']
})
export class BuyCardComponent implements OnInit {
  @Input() buy: Buy;

  constructor() { }

  ngOnInit() {
  }

  getDateLapse(date: string): string {
   return moment(date).fromNow();
  }

  getBackgroundColor(buy: Buy): string{
    if (+buy.operation_gain_percent > 0) {
      return '#edfce5';
    } else {
      return '#f2dce0';
    }
  }

  updateBuys() {

  }
}
