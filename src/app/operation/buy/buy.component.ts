import {Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';

import * as moment from 'moment';

import {BuyService} from './buy.service';
import {Buy} from '../model/buy';
import { Stock } from '../../stock/model/stock';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit, OnDestroy {

  buy: Buy;
  @Output() onOperationBuy = new EventEmitter<Buy>();

  constructor(private buyService: BuyService) {
    this.buy = new Buy();
    this.buy.date = moment().format("YYYY-MM-DDTHH:mm");
  }

  ngOnInit() {
  }

  ngOnDestroy() {}

  makeBuy() {
    this.buyService.add(this.buy).subscribe(buyed => this.onOperationBuy.emit(buyed));
  }

  stockSelected(stock: Stock) {
    this.buy.stock = stock.pk;
  }
}
