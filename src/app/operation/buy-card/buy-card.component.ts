import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import * as moment from 'moment';

import { Buy } from '../model/buy';
import { BuyService } from 'app/operation/buy/buy.service';

@Component({
  selector: 'zen-buy-card',
  templateUrl: './buy-card.component.html',
  styleUrls: ['./buy-card.component.css']
})
export class BuyCardComponent implements OnInit {
  @Input() buy: Buy;
  @Output() onBuyChanged = new EventEmitter<Buy>();

  private isToUpdateFavorite: boolean;

  constructor(private buyService: BuyService) { }

  ngOnInit() {
  }

  getDateLapse(date: string): string {
    return moment(date).fromNow();
  }

  getBackgroundColor(buy: Buy): string{
    if (+buy.operation_gain_percent > 0) {
      return '#B0FDB0';
    } else {
      return '#FEB2AE';
    }
  }

  updateBuys() {
  }

  notifyChanges() {
    this.buyService.get(this.buy.pk).subscribe();
  }

  markToUpdate() {
    this.isToUpdateFavorite = true;
  }

  updateFavorite() {
    if (this.isToUpdateFavorite) {
      this.buyService.patch(this.buy).subscribe(result => console.log(result));
      this.isToUpdateFavorite = false;
    }
  }
}
