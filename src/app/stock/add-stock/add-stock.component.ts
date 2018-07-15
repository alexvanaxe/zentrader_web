import { Component, OnInit, OnDestroy } from '@angular/core'; 

import {Stock} from '../model/stock';
import {StockService} from '../stock.service';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit, OnDestroy {
  stock: Stock;
  constructor(private stockService: StockService) {
    this.stock = new Stock();
  }

  ngOnInit() {
  }

  ngOnDestroy() {}

  add() {
    this.stockService.add(this.stock).subscribe();
  }

}
