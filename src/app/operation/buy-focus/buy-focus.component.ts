import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

import * as moment from 'moment';

import { BuyService } from '../buy/buy.service';
import { Buy, BuyPaginated } from '../model/buy';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';

@AutoUnsubscribe()
@Component({
  selector: 'app-buy-focus',
  templateUrl: './buy-focus.component.html',
  styleUrls: ['./buy-focus.component.css']
})
export class BuyFocusComponent implements OnInit, OnDestroy {

  buys: BuyPaginated = new BuyPaginated();
  buyFilter: Buy;
  archived: boolean;
  page = 1;

  constructor(private buyService: BuyService,
    private cd: ChangeDetectorRef,
    private postOfficerService: PostOfficerService) {
    this.buyFilter = new Buy();
    this.buys = new BuyPaginated();
  }

  ngOnInit() {
    this.list();
  }

  ngOnDestroy() {}

  updateArchived() {
    this.buyFilter.archived = !this.archived;
    this.list();
  }

  list(page = 1) {
    if (this.buyFilter.archived === true) {
      this.buyFilter.archived = null;
    }
    this.buyService.list_paginated(this.buyFilter, page).subscribe(result => this.processList(result));
  }

  processList(result: BuyPaginated) {
    this.buys = result;
  }

  edit(buy: Buy) {
    this.buyService.patch(buy).subscribe(result => this.list(), error => this.postOfficerService.deliverMessage('Error' +
      'on update operation. Review your data.'));
  }

  goToUrl(url: string) {
    this.buyService.retrieveFromUrl(url).subscribe(result => this.buys = result);
  }

  getCurrentPageClass(currentPage: number) {
    if (currentPage === +this.buys.current) {
      return 'active';
    } else {
      return '';
    }
  }

  updateBuys() {
    this.list();
  }

  getDateLapse(date: Date): string {
   return moment(date).fromNow();
  }

  getBackgroundColor(buy: Buy): string {
    if (+buy.operation_gain_percent > 0) {
      return '#edfce5';
    } else {
      return '#f2dce0';
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
