import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Stock } from '../model/stock';

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

  emitStockClickedToEdit(stockClicked: Stock, index: number) {
    this.editing[index] = !this.editing[index];
    this.onClickStock.emit(stockClicked);
  }

  toggleEdit() {
    this.editing = !this.editing;
  }
}
