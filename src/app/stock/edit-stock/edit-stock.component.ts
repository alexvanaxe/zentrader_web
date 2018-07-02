import {Component, Input, OnInit} from '@angular/core';
import {Stock} from '../model/stock';
import {StockService} from '../stock.service';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {

  @Input()
  stockInput: Stock;

  constructor(private stockService: StockService) {
    this.stockInput = new Stock();
  }

  stockSelected() {
    this.stockService.patch(this.stockInput).subscribe();
  }

  ngOnInit() {
  }

}
