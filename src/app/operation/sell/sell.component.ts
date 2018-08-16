import {Component, Input, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';   

import * as moment from 'moment';

import {Sell} from '../model/sell';
import {SellService} from './sell.service';
import {Buy} from '../model/buy';
import { Stock } from '../../stock/model/stock';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';

@AutoUnsubscribe()
@Component({
  selector: 'zen-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit, OnDestroy {

  sell: Sell;
  stock: Stock;

  @Output() onOperationSell = new EventEmitter<Sell>();

  constructor(private sellService: SellService, private postOfficerService: PostOfficerService) {
    this.sell = new Sell();
    this.sell.archived = true;
    this.sell.date = moment().format("YYYY-MM-DDTHH:mm");
  }

  ngOnInit() {}

  ngOnDestroy() {}

  afterSell(sell: Sell) {
    this.onOperationSell.emit(sell);
    this.sell.pk = null;
  }

  add() {
    this.sellService.add(this.sell).subscribe(sold => this.afterSell(sold), error => this.postOfficerService.deliverMessage(error.error.detail));
  }

  stockSelected(stock: Stock) {
    this.sell.stock = stock.pk;
    this.stock = stock;
  }
}
