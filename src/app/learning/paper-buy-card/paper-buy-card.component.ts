import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';

import * as moment from 'moment';

import { PaperBuy } from '../model/paper_buy';
import { PaperBuyService } from '../paper-buy.service';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-paper-buy-card',
  templateUrl: './paper-buy-card.component.html',
  styleUrls: ['./paper-buy-card.component.css']
})
export class PaperBuyCardComponent implements OnInit, OnDestroy {
  @Input() buy: PaperBuy;
  @Output() onOperationChanged = new EventEmitter<PaperBuy>();

  constructor(private paperBuyService: PaperBuyService) { }

  ngOnInit() {
  }

  ngOnDestroy() {}

  getDateLapse(date: string): string {
    return moment(date).fromNow();
  }

  getClassCard(buy: PaperBuy): string {
    if (+buy.price > 0) {
      return 'zen-card-gain';
    } else {
      return 'zen-card-lose';
    }
  }

  refreshBuy() {
    this.paperBuyService.get(this.buy.pk).subscribe(result => this.afterRefresh(result));
  }

  afterRefresh(buy: PaperBuy) {
    Object.assign(this.buy, buy);
    this.notifyChanges();
  }

  notifyChanges() {
    this.onOperationChanged.emit(this.buy);
  }
}
