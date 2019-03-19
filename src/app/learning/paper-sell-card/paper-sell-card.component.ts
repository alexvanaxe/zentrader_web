import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';

import * as moment from 'moment';

import { PaperSell } from '../model/paper_sell';
import { PaperSellService } from '../paper-sell.service';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-paper-sell-card',
  templateUrl: './paper-sell-card.component.html',
  styleUrls: ['./paper-sell-card.component.css']
})
export class PaperSellCardComponent implements OnInit, OnDestroy {

  @Input() paperSell: PaperSell;
  @Output() onPaperSellUpdated = new EventEmitter<PaperSell>();

  constructor(private paperSellService: PaperSellService) { }

  ngOnInit() {
  }

  ngOnDestroy() {}

  getDateLapse(date: string): string {
    return moment(date).fromNow();
  }

  refreshSell() {
    this.paperSellService.get(this.paperSell.pk).subscribe(result => this.paperSellUpdate(result));
  }

  paperSellUpdate(result: PaperSell) {
    Object.assign(this.paperSell, result);
    this.onPaperSellUpdated.emit(this.paperSell);
  }



  getBackgroundColor(paperSell: PaperSell): string{
    if (+paperSell.sell_gain_percent > 0) {
      return '#B0FDB0';
    } else {
      return '#FEB2AE';
    }
  }
}
