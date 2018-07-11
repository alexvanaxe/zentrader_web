import { Component, OnInit, EventEmitter, Output } from '@angular/core';  
import { Buy } from '../model/buy';
import { Experience } from '../model/experience';
import { Sell } from '../model/sell';

@Component({
  selector: 'zen-operation-accordion',
  templateUrl: './operation-accordion.component.html',
  styleUrls: ['./operation-accordion.component.css']
})
export class OperationAccordionComponent implements OnInit {

  constructor() { }
  @Output() onOperationBuy = new EventEmitter<Buy>();
  @Output() onOperationExperiment = new EventEmitter<Experience>();
  @Output() onOperationSell = new EventEmitter<Sell>();

  ngOnInit() {
  }

  notifyBuy(buy: Buy) {
    this.onOperationBuy.emit(buy);
  }

  notifyExperiment(experience: Experience) {
    this.onOperationExperiment.emit(experience);
  }

  notifySell(sell: Sell) {
    this.onOperationSell.emit(sell);
  }
}
