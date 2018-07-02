import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StockService} from './stock.service';
import {Stock} from './model/stock';
import { AutoUnsubscribe } from '../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stocks: Stock[];
  @Output() onClickStock = new EventEmitter<Stock>();

  editing: boolean[];

  constructor(private stockService: StockService) {
    this.editing = new Array();
  }

  ngOnInit() {
    this.stockService.list().subscribe(stock => this.populateStocks(stock));
  }

  populateStocks(stock: Stock[]) {
    this.stocks = stock;
  }

  emitStockClicked(stockClicked: Stock) {
    this.onClickStock.emit(stockClicked);
  }

  emitStockClickedToEdit(stockClicked: Stock, index: number) {
    this.editing[index] = !this.editing[index];
    this.onClickStock.emit(stockClicked);
  }
}
