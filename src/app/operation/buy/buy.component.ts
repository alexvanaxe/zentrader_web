import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import * as moment from 'moment';

import { BuyService } from './buy.service';
import { Buy } from '../model/buy';
import { Stock } from '../../stock/model/stock';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';

@AutoUnsubscribe()
@Component({
  selector: 'zen-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit, OnDestroy {

  buy: Buy;
  @Output() onOperationBuy = new EventEmitter<Buy>();

  constructor(private buyService: BuyService, private postOfficerService: PostOfficerService) {
    this.buy = new Buy();
  }

  ngOnInit() {
  }

  ngOnDestroy() {}

  afterBuy(buy: Buy) {
    this.onOperationBuy.emit(buy);
    this.buy.pk = null;
  }

  makeBuy() {
    this.buyService.add(this.buy).subscribe(buyed => this.afterBuy(buyed), error => this.postOfficerService.deliverMessage(error.error.detail));
  }


  stockSelected(stock: Stock) {
    this.buy.stock = stock.pk;
  }
}
