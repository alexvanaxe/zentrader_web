import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Stock } from 'app/stock/model/stock';
import { StockService } from 'app/stock/stock.service';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-auto-update',
  templateUrl: './auto-update.component.html',
  styleUrls: ['./auto-update.component.css']
})
export class AutoUpdateComponent implements OnInit, OnDestroy {
  @Input() stock_pk: String;
  @Output() onStockUpdated = new EventEmitter<Stock>();
  onError: boolean;

  constructor(private stockService: StockService) { }

  ngOnInit() {
  }

  autoUpdateStock() {
    this.stockService.update(this.stock_pk).subscribe(result => this.emitStockUpdated(result), error => this.onError = true);
  }

  emitStockUpdated(stock: Stock) {
    this.onError = false;
    this.onStockUpdated.emit(stock);
  }

  ngOnDestroy() { }
}
