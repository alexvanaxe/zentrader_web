import {Component, Input, OnInit} from '@angular/core';
import {Sell} from '../model/sell';
import {SellService} from './sell.service';
import {Buy} from '../model/buy';
import { Stock } from '../../stock/model/stock';

@Component({
  selector: 'zen-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  sell: Sell;
  stock: Stock;

  constructor(private sellService: SellService) {
    this.sell = new Sell();
    this.sell.archived = true;
  }

  ngOnInit() {
  }

  add() {
    this.sellService.add(this.sell).subscribe();
  }

  stockSelected(stock: Stock) {
    this.sell.stock = stock.pk;
    this.stock = stock;
  }
}
