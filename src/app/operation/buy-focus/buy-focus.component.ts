import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core'; 

import * as moment from 'moment';

import { BuyService } from '../buy/buy.service';
import { Buy } from '../model/buy';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';

@AutoUnsubscribe()
@Component({
  selector: 'app-buy-focus',
  templateUrl: './buy-focus.component.html',
  styleUrls: ['./buy-focus.component.css']
})
export class BuyFocusComponent implements OnInit, OnDestroy {

  buys: Buy[];
  buyFilter: Buy;
  archived: boolean;
  constructor(private buyService: BuyService,
    private cd: ChangeDetectorRef,
    private postOfficerService: PostOfficerService) {
    this.buyFilter = new Buy();
    this.buys = [];
  }

  ngOnInit() {
    this.list();
  }

  ngOnDestroy() {}

  updateArchived() {
    this.buyFilter.archived = !this.archived;
    this.list();
  }

  list() {
    if (this.buyFilter.archived == true) {
      this.buyFilter.archived = null;
    }
    this.buyService.list(this.buyFilter).subscribe(result => this.buys = result);
  }

  edit(buy: Buy) {
    this.buyService.patch(buy).subscribe(result => this.list(), error => this.postOfficerService.deliverMessage("Error on update operation. Review your data."));
  }

  updateBuys() {
    this.list();
  }

  getDateLapse(date: Date): string {
   return moment(date).fromNow();
  }

  getBackgroundColor(buy: Buy): string{
    if (+buy.operation_gain_percent > 0) {
      return '#edfce5';
    } else {
      return '#f2dce0';
    }
  }
}
