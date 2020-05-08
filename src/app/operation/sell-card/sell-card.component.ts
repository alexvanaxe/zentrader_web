import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';

import * as moment from 'moment';

import { PostOfficerService } from '../../postoffice/post-officer-service.service';
import { SellService } from '../sell/sell.service';
import { Sell } from '../model/sell';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-sell-card',
  templateUrl: './sell-card.component.html',
  styleUrls: ['./sell-card.component.css']
})
export class SellCardComponent implements OnInit, OnDestroy {
  @Input() sell: Sell;
  @Output() onSellChanged = new EventEmitter<Sell>();

  private isToUpdateFavorite: boolean;

  constructor(private sellService: SellService, private postOfficerService: PostOfficerService) { }

  ngOnInit() {
  }

  ngOnDestroy() {}

  notifyChanges() {
    this.sellService.get(this.sell.pk).subscribe(result => this.onSellChanged.emit(result));
  }

  markToUpdate() {
    this.isToUpdateFavorite = true;
  }

  updateFavorite() {
    if (this.isToUpdateFavorite){
      const sellToUpdate = new Sell();
      sellToUpdate.pk = this.sell.pk;
      sellToUpdate.favorite = this.sell.favorite;
      this.sellService.patch(sellToUpdate).subscribe();
      this.isToUpdateFavorite = false;
    }
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

  getCardClass(sell: Sell) {
    if (sell.archived === true) {
      return 'zen-card-archived';
    }

    if (sell.executed === true) {
      return 'zen-card-executed';
    }

    if (+sell.stock_data.price <= +sell.stop_loss){
      return 'zen-card-stop';
    }

    if (+sell.profit > 0) {
      return 'zen-card-gain';
    } else {
      return 'zen-card-loss';
    }
  }
}
