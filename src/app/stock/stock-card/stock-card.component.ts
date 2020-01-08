import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Stock } from '../model/stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'zen-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  @Input() stock: Stock;
  @Output() onClickStock = new EventEmitter<Stock>();

  editing: boolean;

  constructor(private stockService: StockService) {
  }

  ngOnInit() { }

  emitStockClicked(stockClicked: Stock) {
    this.onClickStock.emit(stockClicked);
  }

  updateStock(stock: Stock) {
    this.stock = stock;
    this.toggleEdit();
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  autoUpdateStock() {
    this.stockService.update(this.stock).subscribe(result => this.stock = result);
  }
}
