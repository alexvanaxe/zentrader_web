import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StockService} from '../stock.service';
import {Stock} from '../model/stock';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-stock-select',
  templateUrl: './stock-select.component.html',
  styleUrls: ['./stock-select.component.css']
})
export class StockSelectComponent implements OnInit {

  stocks: Stock[];
  selectedStock: Stock;
  @Output() selectStockEvent = new EventEmitter<Stock>();
  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stockService.list().subscribe(stocks => this.stocks = stocks);
  }

  emmitSelectedStock() {
    this.selectStockEvent.emit(this.selectedStock);
  }
}
