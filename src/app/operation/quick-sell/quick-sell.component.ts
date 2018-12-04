import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';   

import * as moment from 'moment';

import { Buy } from '../model/buy';
import { Sell } from '../model/sell';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';
import { SellService } from '../sell/sell.service';
import { ExperienceService } from '../experience/experience.service';
import { Experience } from '../model/experience';

@Component({
  selector: 'zen-quick-sell',
  templateUrl: './quick-sell.component.html',
  styleUrls: ['./quick-sell.component.css']
})
export class QuickSellComponent implements OnInit {
  @Input() operation;
  @Output() onOperationSold = new EventEmitter<Sell>();

  constructor(private sellService: SellService,
              private experienceService: ExperienceService,
              private postOfficerService: PostOfficerService) { }

  ngOnInit() {
  }

  quickSell() {
    const sell = new Sell();
    sell.amount = this.operation.amount;
    sell.stock = this.operation.stock;
    sell.price = this.operation.stock_data.price;
    sell.nickname = this.operation.nickname;
    sell.buy = this.operation.pk;

    this.experienceService.get(this.operation.experience).subscribe(experience => this.registerSell(experience, sell), error => this.postOfficerService.deliverMessage("Error retrieving the experience"));
  }

  registerSell(experience: Experience, sell: Sell) {
    sell.stop_loss = experience.stop_loss;
    sell.stop_gain = experience.stop_gain;

    this.sellService.add(sell).subscribe(sellMade => this.afterSell(sellMade), error => this.postOfficerService.deliverMessage("Error making the sell."));
  }

  afterSell(sellMade: Sell) {
    this.onOperationSold.emit(sellMade);
  }

}
