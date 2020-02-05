import { Component, OnInit, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { Buy } from '../model/buy';
import { Experience } from '../model/experience';
import { Sell } from '../model/sell';
import { Stock } from 'app/stock/model/stock';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-operation-accordion',
  templateUrl: './operation-accordion.component.html',
  styleUrls: ['./operation-accordion.component.css']
})
export class OperationAccordionComponent implements OnInit, OnDestroy {

  constructor() { }
  @Output() onOperationBuy = new EventEmitter<Buy>();
  @Output() onOperationExperiment = new EventEmitter<Experience>();
  @Output() onOperationSell = new EventEmitter<Sell>();

  @Output() onOperationMade = new EventEmitter();

  @Input() stock_input: Stock;

  ngOnInit() {
  }

  ngOnDestroy() {}

  notifyBuy(buy: Buy) {
    this.onOperationBuy.emit(buy);
    this.onOperationMade.emit();
  }

  notifyExperiment(experience: Experience) {
    this.onOperationExperiment.emit(experience);
    this.onOperationMade.emit();
  }

  notifySell(sell: Sell) {
    this.onOperationSell.emit(sell);
    this.onOperationMade.emit();
  }
}
