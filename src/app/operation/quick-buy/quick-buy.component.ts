import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';   

import * as moment from 'moment';

import { Experience } from '../model/experience';
import { Buy } from '../model/buy';
import { BuyService } from '../buy/buy.service';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-quick-buy',
  templateUrl: './quick-buy.component.html',
  styleUrls: ['./quick-buy.component.css']
})
export class QuickBuyComponent implements OnInit, OnDestroy {
  @Input() experience: Experience;
  @Output() onOperationBought = new EventEmitter<Buy>();

  constructor(private buyService: BuyService,
              private postOfficerService: PostOfficerService) { }

  ngOnInit() {
  }

  ngOnDestroy() {}

  quickBuy() {
    const buy = new Buy();
    buy.amount = this.experience.amount;
    buy.nickname = this.experience.nickname;
    buy.price = this.experience.price;
    buy.stock = this.experience.stock;
    buy.experience = this.experience.pk;
    buy.category = 'NA';
    buy.executed = true;
    
    this.buyService.add(buy).subscribe(buyMade => this.afterBuy(buyMade),
      error => this.postOfficerService.deliverMessage("Error on make the buy"));
  }

  afterBuy(buyMade: Buy) {
    this.onOperationBought.emit(buyMade);
  }
}
