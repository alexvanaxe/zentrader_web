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

  constructor() {
  }

  ngOnInit() { }

  emitStockClicked(stockClicked: Stock) {
    this.onClickStock.emit(stockClicked);
  }

  updateStock(stock: Stock) {
    this.stock = stock;
    if (this.editing == true){
      this.toggleEdit();
    }
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

}
