import {Component, Input, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';

import { Stock } from 'app/stock/model/stock';
import { StockService } from 'app/stock/stock.service';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit, OnDestroy {
  @Input() stockInput: Stock;

  @Output() onStockUpdated = new EventEmitter<Stock>();

  constructor(private stockService: StockService) {
    this.stockInput = new Stock();
  }

  stockSelected() {
    this.stockService.patch(this.stockInput).subscribe(stock => this.onStockUpdated.emit(stock));
  }

  stockUpdated(stock: Stock) {
    this.stockInput = stock;
    this.onStockUpdated.emit(stock);
  }

  ngOnInit() { }

  ngOnDestroy() { }
}
