import { Component, OnInit, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { Buy } from 'app/operation/model/buy';
import { Experience } from 'app/operation/model/experience';
import { Sell } from 'app/operation/model/sell';
import { Stock } from 'app/stock/model/stock';

@Component({
  selector: 'zen-experience-accordion',
  templateUrl: './experience-accordion.component.html',
  styleUrls: ['./experience-accordion.component.css']
})
export class ExperienceAccordionComponent implements OnInit, OnDestroy {
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
