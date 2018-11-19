import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';   

import * as moment from 'moment';

import { Buy } from '../model/buy';
import { Sell } from '../model/sell';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';
import { SellService } from '../sell/sell.service';

@Component({
  selector: 'zen-quick-sell',
  templateUrl: './quick-sell.component.html',
  styleUrls: ['./quick-sell.component.css']
})
export class QuickSellComponent implements OnInit {
  @Input() operation;
  @Output() onOperationSold = new EventEmitter<Sell>();

  constructor(private sellService: SellService,
              private postOfficerService: PostOfficerService) { }

  ngOnInit() {
  }

  quickSell() {
    const sell = new Sell();
    sell.amount = this.operation.amount;
    sell.stock = this.operation.stock;
    sell.price = this.operation.stock_data.price;
    sell.nickname = this.operation.nickname;
    sell.archived = true;

    this.sellService.add(sell).subscribe(sellMade => this.afterSell(sellMade), error => this.postOfficerService.deliverMessage("Error making the sell."));
  }

  afterSell(sellMade: Sell) {
    this.onOperationSold.emit(sellMade);
  }

}
