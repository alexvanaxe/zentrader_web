import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';   

import * as moment from 'moment';

import { Experience } from '../model/experience';
import { Buy } from '../model/buy';
import { BuyService } from '../buy/buy.service';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';

@Component({
  selector: 'zen-quick-buy',
  templateUrl: './quick-buy.component.html',
  styleUrls: ['./quick-buy.component.css']
})
export class QuickBuyComponent implements OnInit {
  @Input() experience: Experience;
  @Output() onOperationBought = new EventEmitter<Buy>();

  constructor(private buyService: BuyService,
              private postOfficerService: PostOfficerService) { }

  ngOnInit() {
  }

  quickBuy() {
    const buy = new Buy();
    buy.amount = this.experience.amount;
    buy.nickname = this.experience.nickname;
    buy.price = this.experience.price;
    buy.stock = this.experience.stock;
    buy.stop_gain = this.experience.stop_gain;
    buy.stop_loss = this.experience.stop_loss;
    
    this.buyService.add(buy).subscribe(buyMade => this.afterBuy(buyMade),
      error => this.postOfficerService.deliverMessage("Error on make the buy"));
  }

  afterBuy(buyMade: Buy) {
    this.onOperationBought.emit(buyMade);
  }
}
