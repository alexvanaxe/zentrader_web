import { Component, EventEmitter, OnInit, Output, Input, OnDestroy } from '@angular/core'; 

import * as moment from 'moment';

import { BuyService } from '../buy/buy.service';
import { Buy } from '../model/buy';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-buy-list',
  templateUrl: './buy-list.component.html',
  styleUrls: ['./buy-list.component.css']
})
export class BuyListComponent implements OnInit, OnDestroy {

  @Input() buys: Buy[];
  @Output() buySelected = new EventEmitter<Buy>();

  @Output() onOperationUpdated  = new EventEmitter();

  constructor(private buyService: BuyService) { }

  ngOnInit() {
    this.buyService.list().subscribe(buys => this.buys = buys);
  }

  ngOnDestroy() {}

  emitBuySelected(buySelected: Buy) {
    this.buySelected.emit(buySelected);
  }

  notifyChanges() {
    this.onOperationUpdated.emit();
  }

  getDateLapse(date: Date): string {
   return moment(date).fromNow();
  }

  getBackgroundColor(buy: Buy): string{
    if (+buy.operation_gain_percent > 0) {
      return '#edfce5';
    } else {
      return '#f2dce0';
    }
  }
}
