import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';

import { Sell, SellPaginated } from '../model/sell';
import { SellService } from '../sell/sell.service';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-sell-focus',
  templateUrl: './sell-focus.component.html',
  styleUrls: ['./sell-focus.component.css']
})
export class SellFocusComponent implements OnInit, OnDestroy {

  sells: SellPaginated;
  sellFilter: Sell;
  archived: boolean;
  page = 1;

  constructor(private sellService: SellService, private postOfficerService: PostOfficerService) {
    this.sellFilter = new Sell();
    this.sells = new SellPaginated();
  }

  ngOnInit() {
    this.list();
  }

  ngOnDestroy() {}

  updateArchived() {
    this.sellFilter.archived = !this.archived;
    this.list();
  }

  list(page = 1) {
    if (this.sellFilter.archived === true) {
      this.sellFilter.archived = null;
    }
    this.sellService.list_paginated(this.sellFilter, page).subscribe(result => this.processList(result));
  }

  processList(result: SellPaginated) {
    this.sells = result;
  }

  edit(sell: Sell) {
    this.sellService.patch(sell).subscribe(result => this.list(), error => this.postOfficerService.deliverMessage("Error on update operation. Review your data."));
  }

  execute(sell: Sell) {
    const executed_sell = new Sell();
    executed_sell.pk = sell.pk;
    executed_sell.executed = true;

    this.sellService.patch(executed_sell).subscribe(result => this.list(), error => this.postOfficerService.deliverMessage("Error on executing the operation. Review"));
  }

  goToUrl(url: string) {
    this.sellService.retrieveFromUrl(url).subscribe(result => this.sells = result);
  }

  getDateLapse(date: Date): string {
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
      return '#EBEBF4';
    }
    if (+sell.profit > 0) {
      return '#E6F4E6';
    } else {
      return '#F4EBEB';
    }
  }

  getCheckBoxLabelClass(): string {
    if (this.archived) {
      return 'active';
    } else {
      return '';
    }
  }
}
