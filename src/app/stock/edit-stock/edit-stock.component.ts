import {Component, Input, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';   
import {Stock} from '../model/stock';
import {StockService} from '../stock.service';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit, OnDestroy {

  @Input() stockInput: Stock;

  @Output() onStockUpdated = new EventEmitter<Stock>();
  
  constructor(private stockService: StockService) {
    this.stockInput = new Stock();
  }

  stockSelected() {
    this.stockService.patch(this.stockInput).subscribe(stock => this.onStockUpdated.emit(stock));
  }

  ngOnInit() { }

  ngOnDestroy() { }

}
