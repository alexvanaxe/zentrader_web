import { Component, EventEmitter, OnInit, Output, Input, OnDestroy } from '@angular/core';
import { Stock } from 'app/stock/model/stock';
import { StockService } from 'app/stock/stock.service';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-stock-select',
  templateUrl: './stock-select.component.html',
  styleUrls: ['./stock-select.component.css']
})
export class StockSelectComponent implements OnInit, OnDestroy {
  stocks: Stock[];
  @Input() selectedStock: Stock;
  @Output() selectStockEvent = new EventEmitter<Stock>();

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stockService.list().subscribe(stocks => this.stocks = stocks);
  }

  ngOnDestroy() {}

  emmitSelectedStock() {
    this.selectStockEvent.emit(this.selectedStock);
  }
}
