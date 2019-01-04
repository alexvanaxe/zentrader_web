import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';

import { PaperSell } from '../model/paper_sell';

@Component({
  selector: 'zen-paper-sell-card',
  templateUrl: './paper-sell-card.component.html',
  styleUrls: ['./paper-sell-card.component.css']
})
export class PaperSellCardComponent implements OnInit {

  @Input() paperSell: PaperSell;

  constructor() { }

  ngOnInit() {
  }

  getDateLapse(date: string): string {
    return moment(date).fromNow();
  }

  getBackgroundColor(paperSell: PaperSell): string{
    if (+paperSell.sell_gain_percent > 0) {
      return '#B0FDB0';
    } else {
      return '#FEB2AE';
    }
  }
}
