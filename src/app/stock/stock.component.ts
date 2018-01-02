import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StockService} from './stock.service';
import {Stock} from './model/stock';

@Component({
  selector: 'zen-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stocks: Stock[];
  @Output() onClickStock = new EventEmitter<Stock>();

  constructor(private stockService: StockService) {  }

  ngOnInit() {

    this.stockService.list().subscribe(stock => this.populateStocks(stock));
  }

  populateStocks(stock: Stock[]) {
    this.stocks = stock;
  }

  emitStockClicked(stockClicked: Stock) {
    this.onClickStock.emit(stockClicked);
  }
}
