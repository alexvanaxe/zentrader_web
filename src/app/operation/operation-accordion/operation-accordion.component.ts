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

  @Output() onOperationMade = new EventEmitter();

  ngOnInit() {
  }

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
