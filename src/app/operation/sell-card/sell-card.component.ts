import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import * as moment from 'moment';

import { PostOfficerService } from '../../postoffice/post-officer-service.service';
import { SellService } from '../sell/sell.service';
import { Sell } from '../model/sell';

@Component({
  selector: 'zen-sell-card',
  templateUrl: './sell-card.component.html',
  styleUrls: ['./sell-card.component.css']
})
export class SellCardComponent implements OnInit {
  @Input() sell: Sell;
  @Output() onSellChanged = new EventEmitter<Sell>();

  constructor(private sellService: SellService, private postOfficerService: PostOfficerService) { }

  ngOnInit() {
  }

  notifyChanges() {
    this.sellService.get(this.sell.pk).subscribe(result => this.onSellChanged.emit(result));
  
  }
  updateFavorite() {
    this.sellService.patch(this.sell).subscribe();
  }

  getDateLapse(date: string): string {
    return moment(date).fromNow();
  }

  getSoldColor(sell: Sell): boolean {
    if (+sell.profit > 0) {
      return true;
    } else {
      return false;
    }
  }

  getBackgroundColor(sell: Sell): string {
    if (sell.executed === true) {
      return '#C9C9C9'
    }
    if (+sell.stock_data.price <= +sell.stop_loss){
      return '#F9F986';
    }
    if (+sell.profit > 0) {
      return '#B0FDB0';
    } else {
      return '#FEB2AE';
    }
  }
}
