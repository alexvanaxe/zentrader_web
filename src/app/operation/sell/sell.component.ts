import {Component, Input, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';   
import {Sell} from '../model/sell';
import {SellService} from './sell.service';
import {Buy} from '../model/buy';
import { Stock } from '../../stock/model/stock';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

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

  constructor(private sellService: SellService) {
    this.sell = new Sell();
    this.sell.archived = true;
  }

  ngOnInit() {}

  ngOnDestroy() {}

  add() {
    this.sellService.add(this.sell).subscribe(sold => this.onOperationSell.emit(sold));
  }

  stockSelected(stock: Stock) {
    this.sell.stock = stock.pk;
    this.stock = stock;
  }
}
