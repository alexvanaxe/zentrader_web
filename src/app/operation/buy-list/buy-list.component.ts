import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { BuyService } from '../buy/buy.service';
import { Buy } from '../model/buy';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-buy-list',
  templateUrl: './buy-list.component.html',
  styleUrls: ['./buy-list.component.css']
})
export class BuyListComponent implements OnInit {

  @Input() buys: Buy[];
  @Output() buySelected = new EventEmitter<Buy>();

  @Output() onOperationUpdated  = new EventEmitter();

  constructor(private buyService: BuyService) { }

  ngOnInit() {
    this.buyService.list().subscribe(buys => this.buys = buys);
  }

  emitBuySelected(buySelected: Buy) {
    this.buySelected.emit(buySelected);
  }

  notifyChanges() {
    console.log("Stock changed");
    this.onOperationUpdated.emit();
  }
}
